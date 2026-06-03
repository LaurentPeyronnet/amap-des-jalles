/**
 * Logique de planning pour l'AMAP des Jalles.
 * Les données producteurs viennent de producers-data.js (à charger AVANT ce fichier).
 */

/**
 * Calcule la présence de chaque producteur actif pour une date donnée.
 * @param {Date} date - Date de la distribution
 * @returns {Array} - Producteurs actifs enrichis d'une propriété isPresent
 */
function getProducersPresence(date) {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11

    const startOfYear = new Date(year, 0, 1);
    const weekNum = Math.floor((date - startOfYear) / (7 * 24 * 60 * 60 * 1000));

    return getActiveProducers().map(p => {
        let isPresent = false;
        
        if (p.regular) {
            isPresent = true;
        } else if (p.seasonal) {
            // Seasonal months are 1-12 in config, match with month + 1
            isPresent = p.seasonal.includes(month + 1);
        } else if (p.frequency) {
            // Simple modulo logic for frequency
            isPresent = (weekNum % p.frequency === 0);
        } else {
            // Fallback
            isPresent = false;
        }

        return { ...p, isPresent };
    });
}

/**
 * Finds the next distribution date from today
 * @returns {Date} - The next distribution date object
 */
function getNextDistributionDate() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 4 = Thursday
    
    let nextDist = new Date(today);
    
    // If today is Thursday
    if (currentDay === 4) {
        // Check if it's before 19:45
        const cutoff = new Date(today);
        cutoff.setHours(19, 45, 0, 0);
        
        if (today <= cutoff) {
            return nextDist;
        }
    }
    
    // Calculate days until next Thursday
    let daysUntilThursday = (4 - currentDay + 7) % 7;
    if (daysUntilThursday === 0) daysUntilThursday = 7; // If today is Thursday (after cutoff), next is in 7 days
    
    nextDist.setDate(today.getDate() + daysUntilThursday);
    return nextDist;
}

/**
 * Formats a date for display (e.g., "Jeu. 29 janv.")
 * @param {Date} date 
 * @returns {string}
 */
function formatDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });
}
