// Le fichier myserver.js a pour mission de créer le serveur de l'aplication 

// J'importe le package HTTP
const http = require("http");

// J'importe l'application app.js
const app = require("./app");

// Je crée un serveur
const serveur = http.createServer(app);

const numeroPort = 3009;
serveur.listen(numeroPort, () => {
    console.log(`Le serveur est à l'écoute sur le port ${numeroPort}`); // Le ${numeroPort} est une interpolation de chaîne qui affiche le numéro de port sur lequel le serveur écoute.
});