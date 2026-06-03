# Variante v2 — Yuka app

Variante de design étendue à partir du mockup [`../variantes/05-yuka/index.html`](../variantes/05-yuka/index.html), appliquée aux pages du site selon le cadrage [`../VARIANTES_BRIEF.md`](../VARIANTES_BRIEF.md).

## Changelog v2.1 (03/06/2026)

Restructuration + actualisation des données depuis le dump AMAPJ `V048_2026_06_03`.

- **Accueil** : bloc « Prochaine distribution » transformé en carte compacte à droite de l'accroche du hero (`.hero-flex` / `.hero-next`). Les infos pratiques (Lieu / Horaires / Bon à savoir) sont désormais sur l'accueil, avant « Nos produits ».
- **Page Planning supprimée** : le planning détaillé reste sur AMAPJ. Le tableau hebdo et la légende ont été retirés (la logique `js/planning-logic.js` reste utilisée par la carte « prochaine distribution » de l'accueil).
- **Galerie fusionnée dans Association** : frise annuelle + événements + lightbox déplacés dans `asso.html` (section `#galerie`, ajoutée au sommaire). `galerie.html` supprimée.
- **Navigation** : Accueil · Producteurs · Association · Contact (+ pill AMAPJ), uniformisée sur toutes les pages.
- **Données** : `amapInfo.members = 56` (foyers adhérents période 2026). 4 producteurs ajoutés depuis le dump — Huîtres (Maison Guyonneau), Fruits secs (La ferme des fruits secs), Brugnon/Pêche (Marielle Sage), Noix (La ferme de la Béloffie). Statut bio et coordonnées GPS de ces 4 producteurs **à confirmer en CC**.

## Direction esthétique

**App moderne data-driven** : transparence, mobile-first, ergonomie d'application — l'AMAP racontée comme on raconterait un scan Yuka. Idée centrale : montrer que la traçabilité (16 producteurs, distances, certifications bio) est lisible en un coup d'œil, comme on lit un score nutritionnel.

| Aspect | Référence (SaaS générique) | v2 Yuka app |
|---|---|---|
| Boutons | Coins arrondis 8px, fond uni | Pills full radius 999px + ombre verte portée |
| Cards | Border-radius 12px, ombre soft | Radius 24px, ombre molle, hover translateY |
| Icons | Emoji nu | Chip 56×56 fond vert soft, emoji centré |
| Stats | Card centrée plate | Pill 20px, valeurs Nunito Black 2rem, label uppercase |
| Header | Background blanc + nav classique | Sticky app-style, nav en pills, CTA AMAPJ pill verte |
| Footer | Encre profonde dark | Blanc avec bordure top, plus respirant |

## Palette

| Variable | Hex | Rôle |
|---|---|---|
| `--green` | `#54b948` | **Accent principal** — boutons, CTA, header logo, présent planning |
| `--green-dark` | `#3a9032` | Hover boutons, liens, titres logo |
| `--green-soft` | `#e6f7e3` | Fond doux : chips actifs, hover nav, icônes |
| `--green-glow` | `rgba(84,185,72,0.35)` | Ombres portées colorées des CTA |
| `--orange` `--yellow` `--red` | `#ff9800` `#ffc107` `#e64a4a` | Scoring (B/C/D), accents ponctuels |
| `--bg` | `#fafbfc` | Fond principal app, très clair |
| `--white` | `#ffffff` | Cards, header, footer |
| `--ink` | `#1d2733` | Texte principal, boutons accent |
| `--mute` | `#6a7787` | Texte secondaire, labels |
| `--line` | `#eef1f5` | Bordures, séparateurs, tags inactifs |

Alias rétro-compat (pour les `style="... var(--color-*)"` inline du HTML/JS) :
`--color-primary → --green`, `--color-secondary → --green-dark`, `--color-accent → --yellow`, `--color-text → --ink`, etc.

## Typographie

| Font | Poids | Usage |
|---|---|---|
| **Nunito** | 400 / 500 / 600 / 700 / 800 / 900 | Tout (titres, corps, boutons, mono) — police ronde, app-feel, lisible mobile |

Une seule famille, mais 6 graisses utilisées :
- 900 (Black) → titres `h1`/`h2`, valeurs stats, score badges
- 800 (ExtraBold) → boutons, h3 cards, nav active, badges bio
- 700 (Bold) → labels, tags, nav inactive
- 600 (SemiBold) → liens footer, métadonnées
- 500/400 → corps de texte

Aucune des fonts bannies par le brief (Inter, Roboto, Arial, Space Grotesk, Segoe UI).

## Choix forts

1. **Boutons pills full radius (999px)** avec ombre portée verte signature `0 6px 18px rgba(84,185,72,0.35)` — sur tous les `.btn-primary` et la pill AMAPJ du header.
2. **Cards à hover lift** translateY(-4px) + ombre qui grossit, signature app moderne.
3. **Icônes en chips verts** : la card-icon devient un carré arrondi 56×56 en `--green-soft` avec l'emoji centré, beaucoup plus visible que l'emoji nu.
4. **Stats en pills horizontales** avec valeur en Nunito Black 2rem + label uppercase 0.82rem. Une stat highlight (1ère) en dégradé vert avec ombre verte.
5. **Header sticky app** : nav en pills (hover `--green-soft`), CTA AMAPJ en pill verte avec ombre — pas de menu classique.
6. **Hero asymétrique** avec halo radial vert clair en haut à droite (signature Yuka), h1 noir 3.6rem (Nunito 900), accent vert disponible via `<span class="accent">`.
7. **Planning table** avec header vert plat, présent en `--green-dark` gras, ligne "next-distribution" surlignée vert-soft avec liseré inset vert à gauche (au lieu du jaune ambre SaaS).
8. **Producteurs** : dégradés catégoriels du JS préservés (signature visuelle multi-couleurs des cards producteurs), emoji en chip translucide sur fond gradient. Badge bio en pill verte avec ombre douce.
9. **Inputs en pills** (search producteurs) : border 2px `--line` qui passe vert au focus, accent-color vert sur checkboxes.
10. **Score badge bonus** (`.score-badge`, `.score-badge.b/c/d`) prêt à l'emploi pour une future intégration d'un scoring traçabilité par producteur (vert/jaune/orange/rouge à la Yuka).

## Écarts vs référence

### CSS
- `css/style.css` réécrit complètement (~590 lignes), toutes les classes existantes conservées (compat JS/HTML)
- Variables CSS renommées sémantiquement (`--green`, `--ink`, `--mute`…)
- **Alias `--color-*` ajoutés** pour les inline qui les référencent

### HTML — modifications ciblées
- 3 lignes `<link>` Google Fonts (Nunito) ajoutées dans le `<head>` des 8 pages
- Couleurs SaaS résiduelles remplacées dans les `style=""` inline :
    - `#667eea` `#764ba2` → `var(--green-dark)` (violet → vert)
    - `#10b981` `#22c55e` → `var(--green)`
    - `#059669` `#16a34a` `#4338ca` → `var(--green-dark)`
- `recap.html` : suppression de la définition `.badge-bio` inline qui surchargeait le badge vert global

### JS — non touché
Aucun script modifié. Tous les hooks d'IDs et classes préservés.

## Limitations connues

- **`producteurs.html` `categoryGradient`** (lignes 144-152) : le JS injecte encore des dégradés colorés par catégorie (`viande`, `pain`, etc.) qui ne sont pas dans la palette Yuka. C'est **assumé** : ça donne aux cards producteurs une signature visuelle multi-couleurs cohérente avec l'idée "scoring multi-critères" Yuka. Si on veut une uniformité verte, retirer ce mapping côté JS.
- **`asso.html`, `galerie.html`, `recap.html`** ont chacune un bloc `<style>` inline avec quelques couleurs neutres (`#e5e7eb`, `#f3f4f6`, `#fef3c7`…) non remplacées — elles restent visuellement OK (gris/jaune doux), mais une v2.1 pourrait les migrer vers les vars Yuka pour une parfaite homogénéité.
- **Pas de score réel par producteur** : le mockup `variantes/05-yuka/` montre une "score-card" et des badges A/B sur chaque producteur. Ici on n'a pas la donnée (pas de critère scoring dans `producers-data.js`). Le CSS `.score-badge` est prêt mais non utilisé. Décision : v2 sans scoring, v3 éventuelle avec scoring si on définit les critères.

## Workflow appliqué

1. Copie `site_simplifie/` → `site_simplifie_v2-yuka_app/`
2. Réécriture complète de `css/style.css` (palette Yuka + classes site préservées + alias rétro-compat)
3. Injection Google Fonts Nunito dans les 8 pages via PowerShell
4. Remplacement en masse des hex SaaS dans tous les `.html` via PowerShell
5. Nettoyage manuel de `recap.html` (override `.badge-bio`)
6. Rédaction de ce `_README.md`

## À faire (si direction validée)

- `_preview/` : screenshots desktop 1440×900 + mobile 375×812 des 8 pages via Playwright MCP
- Ajouter un **scoring traçabilité** par producteur dans `js/producers-data.js` (5 critères : bio certifié, distance < 50km, vente directe, saisonnier, transparence prix → score A/B/C/D) et activer les `.score-badge` dans `producteurs.html` et `index.html`
- Ajouter le `.chip` "🌱 tagline" en début de chaque `.section-title` pour renforcer l'inspiration Yuka (déjà supporté par le CSS, juste à ajouter dans les HTML)
- Refondre le bloc "Prochaine distribution" (`renderNextDistribution` dans `index.html`) en vraie score-card avec circle conique vert, comme dans `variantes/05-yuka/index.html`
- v2.1 : nettoyer les couleurs grises résiduelles dans les `<style>` de `asso.html`, `galerie.html`, `recap.html`
