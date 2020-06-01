# RecetteBox

Site permettant le partage et le stockage de recettes. Dévéloppé lors d'une formation sur React, React Router & Firebase.

# Préambule

Ce site a été entièrement développé lors de la formation <em> React 16+ - Le Guide Complet (+ React Router 4 & Firebase) </em> créé par Antho Welc <a href="https://www.udemy.com/course/react-le-guide-complet/" > Liens vers sa formation sur Udemy</a>.

# Description

Cette application permet d'écrire, stocker et partager différentes recettes entre utilisateur. A l'ouverture de l'application soit :

- Vous vous identifiez pour voir ou créer d'autres recettes
- Vous visitez la page d'une autre personne en entrant son nom

Pour modifer des recettes ou en créer, il faut avoir les droits sur sa page. Pour cela, il suffit de vous authentifier avec votre compte Google:

- Soit la page n'est reliée à aucun chef, alors elle vous appartient.
- Soit il s'agit de votre page qui est reliée à votre compte, vous pourrez la gérer
- Soit la page ne vous appartient pas, vous ne pourrez pas modifier son contenu

Le serveur Backend est intégralement géré par Firebase

Langages et framework utilisés:

- CSS
- HTML
- React
- React Router V4
- (Serveur backend: Firebase)

# Installation

## Pré Requis

Nécessite :

- Un compte sur Firebase
- créer un projet (_Ex: recettes-app_)
- Autorisé l'authentification via Google
- Créer une base de donnée

## Procédure

```shell
$ git clone "https://github.com/heartblood91/RecettesBox.git" && cd RecettesBox\
$ npm i
$ npm run start
```

**Modifier le fichier ./src/base.js en remplaçant les XXXX par vos informations provenant de votre compte firebase**

```shell
$ npm run start
```

## Exemple

Vous pouvez tester une copie du site <a href="http://recettes.hidemyhome.ovh/"> ICI </a>. Pour voir des recettes, faîtes un tour sur la boîte à recettes de Cedric. Vous pouvez tester le site, créer une page, ajouter, supprimer des recettes, la base de donnée est réinitialisée tous les jours.
