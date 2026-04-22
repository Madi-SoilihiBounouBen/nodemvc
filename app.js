// Le fichier app.js est une application de type express.js

const express = require("express");

// J'importe la route accueilRoute qui gère les routes de la page d'accueil
const accueilRoute = require("./routes/accueilroute");
const authentificationRoute = require("./routes/authentificationRoute");

const db = require("./models"); // J'importe la configuration de la base de données et les modèles Sequelize à partir du fichier index.js dans le dossier models pour pouvoir les utiliser dans l'application. Cela me permettra d'interagir avec la base de données MySQL en utilisant les modèles définis avec Sequelize.


// J'initialise mon application express
const app = express();

// Je définis le dossier où se trouvent de views
app.set("views", "./views");

// Je définis le moteur de template que je vais utiliser pour rendre les vues
app.set("view engine", "ejs");

app.use(express.static("publics")); // Je définis le dossier "publics" comme dossier de fichiers statiques (CSS, images, etc.) pour que les fichiers à l'intérieur de ce dossier soient accessibles depuis les vues.

// Extraire les données de formulaire dans les requêtes POST
app.use(express.urlencoded({ extended: false })); // Je configure express pour qu'il puisse parser les données envoyées dans les requêtes POST, notamment les données de formulaire. L'option extended: false signifie que je n'utilise pas de bibliothèque de parsing(parsing veut dire analyser) avancée.

// Synchroniser la base de données avec Sequelize. La méthode sync() crée les tables dans la base de données si elles n'existent pas déjà, en fonction des modèles définis avec Sequelize. L'option force: false signifie que je ne veux pas forcer la recréation des tables si elles existent déjà, ce qui permet de préserver les données existantes dans la base de données.
db.sequelize.sync({force: false}).then(() => {
    console.log("Synch db");
}).catch((err) => {
    console.error("Failed to sync db", err.message);
});


// J'utilise le routeur accueilRoute pour gérer à partir de la route "/"
app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route get(/authentificationRoute.js) pour gérer les routes d'authentification
app.use("/", authentificationRoute);

// j'exporte l'application pour pouvoir l'utiliser dans d'autres parties de l'application. Notamment pour démarrer le serveur dans un fichier séparé (par exemple, server.js).
module.exports = app;
