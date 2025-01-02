# Fruits List App 🍎🍇🍊

Cette application React Native affiche une liste de fruits avec des fonctionnalités de pagination, de filtre, et de navigation vers les détails des fruits. Elle utilise Expo, React Query, Redux et TypeScript pour un développement moderne et performant.

## Table des matières

- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Exécution](#exécution)
- [Tests](#tests)
- [Démo](#démo)
- [Améliorations](#améliorations)

---


## Technologies Utilisées
- **React Native** : Pour l'interface utilisateur.
- **Expo** : Pour le développement et le déploiement rapide.
- **React Query** : Pour la gestion des données asynchrones.
- **Redux** : Pour la gestion globale de l'état, incluant :
  - Gestion des favoris.
  - Persistance des données avec Redux Persist.
- **TypeScript** : Pour un typage statique robuste.

---

## Prérequis

- [Node.js](https://nodejs.org/) version 16 ou supérieure
- [Expo CLI](https://expo.dev/) installé globalement
- Watchman (si vous travaillez sur macOS)
- Un simulateur ou un appareil physique pour tester l'application

---

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/amal-ouerfelli/Aimigo.git
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Installez Expo CLI si ce n'est pas déjà fait :
    ```bash
    npm install -g expo-cli
    ```

## Exécution
Pour démarrer l'application en mode développement, exécutez :

    ```bash
    npx expo start 
    ```
Scannez le code QR dans l'application Expo Go pour tester sur un appareil physique, ou démarrez un simulateur.

## Tests
Cette application utilise Jest et Testing Library pour les tests. Pour exécuter les tests :

1. Assurez-vous que toutes les dépendances sont installées.

2. Lancez les tests avec :
    ```bash
    npm test
    ````
Les tests couvrent la fonctionnalité de recherche d'un fruit avec son nom.

## Démo
Lien pour la démonstration: 
https://we.tl/t-q1Rcy4mwaI

## Améliorations
1. Amélioration du design des composants.
2. Ajout d'autres tests unitaires
3. Gestion améliorée des erreurs : Messages clairs et informatifs pour les utilisateurs en cas de problème (exemple : échec de connexion à l'API).
4. Internationalisation (i18n) : Support multilingue avec des traductions adaptées à l'utilisateur en utilisant la bibliothèque **react-i18next** pour une gestion simple et efficace.

