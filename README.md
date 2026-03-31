# 📘 TP 1 : Création d'une application React simple

## 📚 Cours

Développement Front-End moderne avec React

---

## 🎯 Objectif du TP

Ce TP a pour objectif de découvrir les bases de React à travers la création d'une application simple.

À la fin de ce TP, nous avons appris à :

* Initialiser un projet React avec Create React App
* Créer des composants fonctionnels avec JSX
* Utiliser les props pour transmettre des données
* Structurer une application React de manière organisée

---

## ⚙️ Installation et lancement

### 1. Prérequis

* Node.js installé
* npm installé

Vérification :

```
node -v
npm -v
```

---

### 2. Création du projet

```
npx create-react-app tp-react
cd tp-react
npm install prop-types
npm start
```

Application accessible sur :

```
http://localhost:3000
```

---

## 🧱 Structure du projet

```
src/
├── App.js
├── HelloWorld.js
├── Greeting.js
├── Profil.js
├── Voiture.js
├── ListeCourses.js
└── index.js
```

---

## 🧩 Description des composants

### 🔹 HelloWorld

Affiche un message simple :

```
Hello World !
```

---

### 🔹 Greeting

Affiche un message personnalisé grâce aux props :

```
Bienvenue Hiba !
Bienvenue Ali !
```

---

### 🔹 Profil

Affiche :

* une image utilisateur
* le nom de l'utilisateur

Utilisation de **PropTypes** pour sécuriser les données.

---

### 🔹 Voiture

Affiche les informations d’une voiture :

* marque
* modèle
* couleur

Exemple :

```
Voiture : Tesla Model 3, Couleur : Blanche
```

---

### 🔹 ListeCourses

Affiche une liste dynamique d’éléments (tableau) :

Exemple :

```
- Pain
- Lait
- Œufs
```

---

## 🧠 Concepts utilisés

### ✔ Composants

Permettent de découper l’interface en parties réutilisables.

### ✔ Props

Permettent de transmettre des données entre composants.

### ✔ JSX

Syntaxe qui permet d’écrire du HTML dans JavaScript.

### ✔ PropTypes

Permet de vérifier le type des données reçues.

---

## 🎨 Design

Un style moderne a été appliqué avec :

* des cartes (cards)
* des couleurs modernes
* des animations au survol
* une mise en page centrée

---

## ✅ Résultat final

L'application affiche :

* un message Hello World
* des messages personnalisés
* un profil utilisateur avec image
* une liste de voitures
* deux listes de courses
<img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/3c123d2f-5c51-48ea-915d-3204ec2a87cb" />
<img width="1919" height="1003" alt="image" src="https://github.com/user-attachments/assets/04381148-be34-455b-98f9-214cb0ec7d34" />
<img width="1919" height="1004" alt="image" src="https://github.com/user-attachments/assets/b94702c3-5a51-4274-a670-500e9ab79768" />


---

## ⚠️ Problèmes rencontrés

* L’image ne s’affichait pas → corrigé avec import ou dossier public
* Confusion entre `node App.js` et `npm start`
* Temps d’installation long avec create-react-app

---

## 🏁 Conclusion

Ce TP nous a permis de comprendre les bases de React, notamment la création de composants et l’utilisation des props. Nous avons également appris à structurer une application et à améliorer son design.

---

## 👨‍💻 Auteur

* Nom : [Ouirouane Hiba]


