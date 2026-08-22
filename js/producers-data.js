/**
 * Source unique des producteurs de l'AMAP des Jalles.
 * Consommée par index.html, producteurs.html, recap.html.
 *
 * Champs :
 *   id           identifiant court (slug)
 *   name         nom commercial
 *   farmer       nom de l'exploitant
 *   category     legumes | viande | produits-laitiers | pain | fruits | boissons | autres
 *   emoji        symbole d'affichage
 *   active       producteur en activité (faux = retiré de l'affichage public)
 *   contractYear année du contrat en cours
 *   archived     contrat clos et archivé
 *   bio          { certified, label, sourceUrl } — null si non bio / hors champ AB
 *   coords       { lat, lng }
 *   address      adresse postale courte
 *   city         ville
 *   distanceKm   distance approximative depuis Saint-Médard-en-Jalles
 *   description  texte court
 *   products     [{ name, active }]
 *   regular      passe à chaque distribution
 *   frequency    1 distribution toutes les N semaines
 *   seasonal     liste des mois (1-12) où le producteur passe
 *
 * Notes :
 * - Les liens bio.sourceUrl pointent vers la meilleure source publique trouvée.
 *   Cible : remplacer par les fiches officielles annuaire.agencebio.org dès collecte.
 * - Statut bio "à confirmer" => bio = null en attendant validation CC.
 */

const producers = [
    {
        id: 'legumes',
        name: 'Le Jardin de Quentin',
        farmer: 'Aurore et Philippe Sournac',
        category: 'legumes',
        emoji: '🥬',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/134462/scea-le-jardin-de-quentin', cert: 'scea le jardin de quentin' },
        coords: { lat: 44.8842, lng: -0.6500 },
        address: 'SCEA Le Jardin de Quentin',
        city: 'Eysines',
        distanceKm: 12,
        description: '90% de la production en agriculture biologique. Légumes de saison uniquement, lutte intégrée sans herbicide.',
        products: [
            { name: 'Petit panier', active: true },
            { name: 'Grand panier', active: true }
        ],
        regular: true
    },
    {
        id: 'oeufs',
        name: 'La Bioferme',
        farmer: 'Elodie Molina',
        category: 'autres',
        emoji: '🥚',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/132210/molina-elodie', cert: 'molina elodie' },
        coords: { lat: 44.9097, lng: -0.7242 },
        address: '41 route de Mautemps',
        city: 'Saint-Aubin-de-Médoc',
        distanceKm: 6,
        description: '250 poules pondeuses et cailles élevées au milieu des bois, dont des Marans aux œufs roux.',
        products: [
            { name: 'Œufs Bio x6', active: true }
        ],
        regular: true
    },
    {
        id: 'pain',
        name: 'La Collective',
        farmer: 'Anne et Brice',
        category: 'pain',
        emoji: '🥖',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/66236/la-collective', cert: 'sarl la collective' },
        coords: { lat: 44.81633, lng: -0.54864 },
        address: '112 avenue Alexis Capelle',
        city: 'Bègles',
        distanceKm: 21,
        description: 'Boulangerie artisanale, biologique et coopérative sous forme de SCOP. Après deux belles années à Latresne, La Collective s\'est installée à Bègles. Les boulanger·e·s produisent des pains 100 % levain naturel, ainsi que des brioches et des biscuits, tous certifiés bio. Une grande partie de leurs farines est issue de l\'agriculture paysanne.',
        products: [
            { name: 'Blé T80', active: true },
            { name: 'Blé T65', active: true },
            { name: 'Campagne', active: true },
            { name: 'Épeautre', active: true },
            { name: 'Brioche', active: false }
        ],
        regular: true
    },
    {
        id: 'fromages',
        name: 'EARL Manieu Noël',
        farmer: 'Marlène Serrano',
        category: 'produits-laitiers',
        emoji: '🧀',
        // Retiré de l'affichage le 19/08/2026 (retour CC) : ne fournit plus l'AMAP.
        active: false,
        contractYear: 2026,
        archived: false,
        // Pas de "cert" : opérateur introuvable dans TRACES NT (06/2026) — on garde la fiche Agence Bio.
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/306410/earl-manieu-noel' },
        coords: { lat: 44.7917, lng: -0.1714 },
        address: 'Ferme Manieu Noël',
        city: 'Courpiac',
        distanceKm: 61,
        description: 'Élevage d\'environ 88 chèvres alpines, transformation sur place en fromages au lait cru et yaourts.',
        products: [
            { name: 'Lot 3 fromages', active: true },
            { name: 'Lot 4 fromages', active: true },
            { name: 'Crottins', active: true },
            { name: 'Yaourts', active: true },
            { name: 'Fromage blanc', active: true }
        ],
        frequency: 2
    },
    {
        id: 'poulets',
        name: 'La Ferme du Gat',
        farmer: 'Charles Labrouche',
        category: 'viande',
        emoji: '🍗',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: null,
        coords: { lat: 44.4486, lng: -0.1842 },
        address: 'La Ferme du Gat',
        city: 'Le Nizan',
        distanceKm: 72,
        description: 'Poulets et pintades fermiers toute l\'année, chapons et pintades de Noël en fin d\'année.',
        products: [
            { name: 'Petit poulet', active: true },
            { name: 'Moyen poulet', active: true },
            { name: 'Gros poulet', active: true },
            { name: 'Pintade', active: true },
            { name: 'Chapon (Noël)', active: false }
        ],
        frequency: 4
    },
    {
        id: 'boeuf',
        name: 'Ferme de la Forteresse',
        farmer: 'Laurent Labegurie',
        category: 'viande',
        emoji: '🥩',
        // Retiré de l'affichage le 19/08/2026 (retour CC) : contrat bœuf arrêté.
        active: false,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/141717/labegurie-laurent-michel', cert: 'labegurie laurent' },
        coords: { lat: 44.9094, lng: -0.6383 },
        address: 'La Ferme de la Forteresse',
        city: 'Blanquefort',
        distanceKm: 13,
        description: 'Élevage Blonde d\'Aquitaine en pâturage extensif sur 140 ha (115 ha de prairies, 25 ha de bois).',
        products: [
            { name: 'Colis bœuf', active: true },
            { name: 'Colis veau', active: true }
        ],
        frequency: 6
    },
    {
        id: 'agneau',
        name: 'La Ferme d\'Alice',
        farmer: 'Alice Musso Guinot',
        category: 'viande',
        emoji: '🐑',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/145616/musso-alice-anne-marie', cert: 'musso alice' },
        coords: { lat: 45.1494, lng: -0.8378 },
        address: 'La Ferme d\'Alice',
        city: 'Saint-Laurent-Médoc',
        distanceKm: 38,
        description: 'Troupeau de brebis Bleu du Maine en semi-extensif, alimentation à base d\'herbe et de foin de ses pâtures.',
        products: [
            { name: 'Colis agneau', active: true }
        ],
        frequency: 8
    },
    {
        id: 'poisson',
        name: 'La Cabane Blanche',
        farmer: 'Olivier Argelas',
        category: 'autres',
        emoji: '🐟',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: null,
        coords: { lat: 44.6364, lng: -1.2581 },
        address: 'Quartier pêcheurs Mimbeau',
        city: 'Cap Ferret',
        distanceKm: 65,
        description: 'Pêcheur en vente directe au Cap Ferret. Produits frais selon arrivage.',
        products: [
            { name: 'Colis 3kg', active: true },
            { name: 'Demi colis 1,5kg', active: true }
        ],
        frequency: 4
    },
    {
        id: 'vin',
        name: 'Château Méric',
        farmer: 'SCEA Vignobles Barron',
        category: 'boissons',
        emoji: '🍷',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB depuis 1964', sourceUrl: 'https://annuaire.agencebio.org/operateur/28958/scea-vignobles-barron', cert: 'scea vignobles barron' },
        coords: { lat: 44.6886, lng: -0.5328 },
        address: '20 av Georges Hébert',
        city: 'La Brède',
        distanceKm: 39,
        description: 'Vignoble familial des Graves, 31 ha de vignes certifiés AB depuis 1964 (7e génération).',
        products: [
            { name: 'Vin rouge AOC', active: true },
            { name: 'Vin blanc', active: true }
        ],
        frequency: 6
    },
    {
        id: 'pommes',
        name: 'Les Coteaux de Boutau',
        farmer: 'Lucas et Axel Dupébé',
        category: 'fruits',
        emoji: '🍎',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB', sourceUrl: 'https://annuaire.agencebio.org/operateur/113583/scea-les-coteaux-de-boutau', cert: 'coteaux de boutau' },
        coords: { lat: 44.5839, lng: -0.0431 },
        address: 'SCEA Les Coteaux de Boutau',
        city: 'Gironde-sur-Dropt / Les Esseintes',
        distanceKm: 80,
        description: '6 ha de vergers de pommes en agriculture biologique, 5 variétés. Jus et bulles de pommes bio.',
        products: [
            { name: 'Sac 4kg pommes', active: true },
            { name: 'Caisse 13kg', active: true },
            { name: 'Jus de pommes 1L', active: true },
            { name: 'Pétillant', active: false }
        ],
        seasonal: [9, 10, 11, 12, 1, 2, 3, 4]
    },
    {
        id: 'kiwis',
        name: 'La Ferme des 2 Rivières',
        farmer: 'Laurent et Marie Brunel',
        category: 'fruits',
        emoji: '🥝',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'Ecocert FR-BIO-01', sourceUrl: 'https://annuaire.agencebio.org/operateur/150230/earl-la-ferme-des-deux-rivieres', cert: 'earl la ferme des deux rivieres' },
        coords: { lat: 44.5708, lng: -0.0656 },
        address: '9 Pignot Nord',
        city: 'Barie',
        distanceKm: 77,
        description: '2 ha de kiwis bio, 2 ha de maraîchage diversifié, 10 ha de grandes cultures. Ensemble certifié Ecocert.',
        products: [
            { name: 'Sac 1,5kg kiwis', active: true },
            { name: 'Sac 3kg kiwis', active: true },
            { name: 'Jus Kiwi/Pomme', active: true },
            { name: 'Nectar de kiwis', active: true }
        ],
        seasonal: [11, 12, 1, 2, 3]
    },
    {
        id: 'miel',
        name: 'Philippe Barret',
        farmer: 'Philippe Barret',
        category: 'autres',
        emoji: '🍯',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: null,
        coords: { lat: 45.0331, lng: -0.7475 },
        address: '',
        city: 'Arsac',
        distanceKm: 14,
        description: 'Apiculteur local. Miel toutes fleurs récolté dans le Médoc.',
        products: [
            { name: 'Miel toutes fleurs 500g', active: true }
        ],
        frequency: 8
    },
    {
        id: 'tisanes',
        name: 'Le Jardin Ti\'Zen',
        farmer: 'Vanessa Vital',
        category: 'autres',
        emoji: '🌿',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'Qualisud', sourceUrl: 'https://annuaire.agencebio.org/operateur/6567/vital-vanessa', cert: 'vital vanessa' },
        coords: { lat: 44.91002032104932, lng: -0.6713301246101865 },
        address: '18 Av. de la Boétie',
        city: 'Le Taillan-Médoc',
        distanceKm: 6,
        description: 'Plantes aromatiques et médicinales cultivées en bio au Taillan-Médoc. Tisanes en feuilles entières, aromates et sirops, préparés à la main.',
        products: [
            { name: 'Infuz\'zen', active: true },
            { name: 'Femini\'tiz', active: true },
            { name: 'Dynam\'iz', active: true },
            { name: 'Thym fuz\'', active: true },
            { name: 'Sirops', active: false },
            { name: 'Aromates', active: false }
        ],
        frequency: 4
    },
    {
        id: 'chataignes',
        name: 'L\'Art des Châtaignes',
        farmer: 'Alexandre et Susanne Guesdon',
        category: 'fruits',
        emoji: '🌰',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'AB + AOP', sourceUrl: 'https://annuaire.agencebio.org/operateur/281129/guesdon-alexandre-paul-marcel', cert: 'guesdon alexandre' },
        coords: { lat: 44.7236, lng: 4.2731 },
        address: '2310 chemin de Veyrières',
        city: 'Chirols (Ardèche)',
        distanceKm: 600,
        description: 'Châtaignes BIO de variétés anciennes (Comballe, Bouche Rouge) en zone AOP Châtaigne d\'Ardèche.',
        products: [
            { name: 'Châtaignes fraîches', active: true }
        ],
        seasonal: [10, 11, 12]
    },
    {
        id: 'savons',
        name: 'Les Savons de Sophie',
        farmer: 'Sophie Vauzelles',
        category: 'autres',
        emoji: '🧼',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'Saponification à froid', sourceUrl: 'https://www.lessavonsdesophie.fr' },
        coords: { lat: 44.8964, lng: -0.7222 },
        address: '',
        city: 'Saint-Médard-en-Jalles',
        distanceKm: 0,
        description: 'Savons fabriqués à la main par saponification à froid, sans huile de palme.',
        products: [
            { name: 'Savons bio', active: true },
            { name: 'Sans huile de palme', active: false }
        ],
        frequency: 8
    },
    {
        id: 'champignons',
        name: 'Lo Champi',
        farmer: 'Laurent Disson',
        category: 'legumes',
        emoji: '🍄',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: { certified: true, label: 'Ecocert', sourceUrl: 'https://annuaire.agencebio.org/operateur/41537/disson-laurent-marcel', cert: 'disson laurent' },
        coords: { lat: 44.95329597984743, lng: -0.321833134826021 },
        address: '1 Rte des Crêtes',
        city: 'Saint-Germain-de-la-Rivière',
        distanceKm: 35,
        description: 'Champignonnière en galeries souterraines (pleurotes, champignons de Paris, shiitakés) sur substrats bio AB.',
        products: [
            { name: 'Champignons variés', active: true }
        ],
        frequency: 4
    },
    {
        id: 'huitres',
        name: 'Maison Guyonneau',
        farmer: 'Maxime Kheloufi',
        category: 'autres',
        emoji: '🦪',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: null,
        coords: { lat: 44.6650, lng: -1.1700 },
        address: 'Bassin d\'Arcachon',
        city: 'Cap Ferret / Arcachon',
        distanceKm: 65,
        description: 'Huîtres du Bassin d\'Arcachon Cap-Ferret, en vente directe (calibres n°0 à n°4).',
        products: [
            { name: 'Huîtres n°2', active: true },
            { name: 'Huîtres n°3', active: true },
            { name: 'Huîtres n°4', active: true },
            { name: 'Huîtres n°0', active: true }
        ],
        frequency: 8
    },
    {
        id: 'fruits-secs',
        name: 'La ferme des fruits secs',
        farmer: 'La ferme des fruits secs',
        category: 'fruits',
        emoji: '🫙',
        active: true,
        contractYear: 2026,
        archived: false,
        bio: null, // bio AB annoncé sur les produits — à confirmer/sourcer en CC
        coords: { lat: 44.2050, lng: 0.6160 }, // Lot-et-Garonne, approximatif (à confirmer)
        address: '',
        city: 'Lot-et-Garonne',
        distanceKm: 140,
        description: 'Fruits secs (noix, amandes, pruneaux, figues), compotes, confitures et jus de fruits, annoncés bio.',
        products: [
            { name: 'Noix bio', active: true },
            { name: 'Amandes bio', active: true },
            { name: 'Pruneaux bio', active: true },
            { name: 'Compotes bio', active: true },
            { name: 'Confitures bio', active: true },
            { name: 'Jus de fruits bio', active: true }
        ],
        frequency: 8
    },
    {
        id: 'brugnon',
        name: 'Marielle Sage',
        farmer: 'Marielle Sage',
        category: 'fruits',
        emoji: '🍑',
        active: true,
        contractYear: 2025, // contrats 2025 — saisonnier été, à reconduire en 2026
        archived: false,
        bio: null,
        coords: null, // localisation non renseignée dans le dump (à confirmer)
        address: '',
        city: 'Gironde',
        distanceKm: null,
        description: 'Brugnons, pêches et raisins de table ramassés à maturité, en pleine saison estivale.',
        products: [
            { name: 'Plateau brugnon/pêche', active: true },
            { name: 'Raisins de table', active: true }
        ],
        seasonal: [6, 7, 8, 9]
    },
    {
        id: 'noix',
        name: 'La ferme de la Béloffie',
        farmer: 'Alice Arnaud',
        category: 'fruits',
        emoji: '🥜',
        active: true,
        contractYear: 2023, // dernier contrat 2023 — à reconfirmer
        archived: false,
        bio: null, // noyers bio annoncés — à confirmer/sourcer en CC
        coords: { lat: 45.3550, lng: 0.7900 },
        address: '',
        city: 'Saint-Pierre-de-Côle (Dordogne)',
        distanceKm: 166,
        description: '1,5 ha de noyers bio, récolte à la main et séchage naturel à l\'ancienne.',
        products: [
            { name: 'Sac 2 kg noix', active: true },
            { name: 'Sac 5 kg noix', active: true },
            { name: 'Brisures de noix 250g', active: true }
        ],
        seasonal: [10, 11, 12]
    }
];

// Adresse et horaires de l'AMAP (source unique pour toutes les pages)
const amapInfo = {
    name: 'AMAP des Jalles',
    venue: 'Pôle Municipal Simone Veil',
    address: '26 Rue Aurel Chazeau',
    postalCode: '33160',
    city: 'Saint-Médard-en-Jalles',
    day: 'Jeudi',
    startTime: '19h',
    endTime: '19h45',
    coords: { lat: 44.89932943717857, lng: -0.7446983784189828 },
    since: 2008,
    members: 56, // 56 foyers adhérents pour la période de cotisation 2026 (dump AMAPJ V048, 03/06/2026)
    annualFee: 8
};

// Filtre par défaut : ne renvoie que les producteurs actifs et non archivés
function getActiveProducers() {
    return producers.filter(p => p.active && !p.archived);
}

/**
 * Lien vers le certificat bio le plus fiable possible.
 *
 * Le bouton « Voir le certificat » des fiches Agence Bio pointe vers l'annuaire
 * TRACES NT (Commission européenne) avec une recherche par identifiant numérique,
 * qui renvoie souvent un résultat vide. La recherche TRACES par *nom* d'opérateur
 * fonctionne, mais le nom Agence Bio (avec 2e/3e prénoms) ne correspond pas
 * toujours à celui de TRACES (qui fait un ET sur tous les mots de la requête).
 *
 * On stocke donc, dans bio.cert, une requête TRACES *vérifiée manuellement* qui
 * retrouve bien l'opérateur. À défaut (cert absent — opérateur introuvable dans
 * TRACES ou source non Agence Bio), on retombe sur bio.sourceUrl.
 *
 * @param {object|null} bio
 * @returns {string} URL du certificat / de la source
 */
function certificateUrl(bio) {
    if (!bio) return '#';
    if (bio.cert) {
        return 'https://webgate.ec.europa.eu/tracesnt/directory/publication/organic-operator/index#!?query='
            + encodeURIComponent(bio.cert) + '&sort=-issuedOn';
    }
    return bio.sourceUrl || '#';
}

// === Marqueurs Leaflet partagés (index, producteurs, contact) ===
// Appelés au rendu de la carte, donc après le chargement de Leaflet (L).

// Marqueur producteur : son emoji dédié dans une pastille goutte d'eau.
function emojiMarkerIcon(emoji) {
    return L.divIcon({
        html: `<span class="emoji-marker-pin"><span class="emoji-marker-glyph">${emoji}</span></span>`,
        className: 'emoji-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 38],
        popupAnchor: [0, -36]
    });
}

// Marqueur AMAP : le logo de l'association, mis en avant (plus grand que les producteurs).
function amapLogoIcon() {
    return L.divIcon({
        html: `<span class="amap-logo-pin"><span class="amap-logo-circle"><img src="images/logo.png" alt="${amapInfo.name}"></span></span>`,
        className: 'amap-logo-marker',
        iconSize: [60, 72],
        iconAnchor: [30, 70],
        popupAnchor: [0, -68]
    });
}
