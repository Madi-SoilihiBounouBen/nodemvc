// Le fichier app.js est une application de type express.js

const express = require("express");

// J'importe mysql2
const mysql = require("mysql2");

// Importe my express connexion
const myConnection = require('express-myconnection');


// J'importe la route accueilRoute qui gère les routes de la page d'accueil
const accueilRoute = require("./routes/accueilroute");
const authentificationRoute = require("./routes/authentificationRoute");


// J'initialise mon application express
const app = express();

// Je définis le dossier où se trouvent de views
app.set("views", "./views");

// Je définis le moteur de template que je vais utiliser pour rendre les vues
app.set("view engine", "ejs");

app.use(express.static("publics")); // Je définis le dossier "publics" comme dossier de fichiers statiques (CSS, images, etc.) pour que les fichiers à l'intérieur de ce dossier soient accessibles depuis les vues.

// configurer la connexion à la base de données MySQL
const optionsConnectionBaseDeDonnees = {
    host: "localhost",
    user: "root",
    password: "marouvatou27BNR**",//pas sécurisé de l'écrire ici
    database: "maygourmet",
    port:3306

    
};


// J'utilise le middleware express-myconnection pour gérer la connexion à la base de données MySQL. Je lui passe le module mysql, les options de connexion et le type de connexion (pool).
app.use(myConnection(mysql, optionsConnectionBaseDeDonnees, 'pool'));


// J'utilise le routeur accueilRoute pour gérer à partir de la route "/"
app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route get(/authentificationRoute.js) pour gérer les routes d'authentification
app.use("/", authentificationRoute);

// j'exporte l'application pour pouvoir l'utiliser dans d'autres parties de l'application. Notamment pour démarrer le serveur dans un fichier séparé (par exemple, server.js).
module.exports = app;