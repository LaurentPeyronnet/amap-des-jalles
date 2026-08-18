# Site public de l'AMAP des Jalles

Site vitrine de l'AMAP des Jalles, association pour le maintien d'une agriculture paysanne
à Saint-Médard-en-Jalles (Gironde), fondée en 2012.

Il s'adresse d'abord aux personnes qui découvrent l'AMAP et envisagent d'y adhérer : il
présente le fonctionnement, les producteurs partenaires, les informations pratiques de
distribution et la vie de l'association. La gestion des adhésions, des contrats et des
permanences ne se fait pas ici mais sur [AMAPJ](https://s2.amapj.fr/p/saint-medard-en-jalles),
vers lequel le site renvoie.

## Pages

| Page | Contenu |
|---|---|
| `index.html` | Accueil : présentation, prochaine distribution, infos pratiques, produits |
| `producteurs.html` | Les producteurs partenaires, filtrables par catégorie |
| `asso.html` | L'association : repères, règlement intérieur, statuts, charte, AG, collège, temps forts, liens amis |
| `contact.html` | Contact, accès au lieu de distribution, questions fréquentes |
| `recap.html` | Récapitulatif producteurs, produits et prix — version imprimable |
| `recap-prive.html` | Redirection vers la version interne de `recap.html` |

## Technique

Site statique : HTML, CSS et JavaScript, sans build ni dépendance à installer. Ouvrir
`index.html` dans un navigateur suffit, ou servir le dossier (`python -m http.server`) pour
tester les liens relatifs comme en production.

Les données producteurs sont dans `js/producers-data.js`, la logique du planning de
distribution dans `js/planning-logic.js`, les documents téléchargeables dans `documents/`.
