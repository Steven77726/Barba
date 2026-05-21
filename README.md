# Winess Hub

Web app interne statique pour piloter les commandes, préparations magasin, livraisons, rappels, litiges, arrivages, stock Wino et recherche IA globale.

## Aperçu local

```bash
python3 -m http.server 4173
```

Puis ouvrez :

```text
http://127.0.0.1:4173
```

## Stack

- HTML/CSS/JavaScript autonome pour un déploiement statique immédiat.
- Données mockées centralisées dans `app.js`.
- Routes par hash pour garder une app simple sans build tool.
- Adaptateurs API mock prêts pour Wino et Winess Livraison : `apiClients.wino` et `apiClients.winessLivraison`.

## Vérifications

```bash
node --check app.js
```

Le projet ne contient pas de configuration TypeScript locale. La vérification actuelle se fait donc au niveau JavaScript natif et audit navigateur.
