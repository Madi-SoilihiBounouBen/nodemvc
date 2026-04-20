// Import le fichier Express
const express = require("express");

// Création d'un routeur Express pour gérer les routes séparément
const router = express.Router();

// Import du contrôleur qui contient la logique de la page d'accueil
const accueilController = require("../controllers/accueilControllers");

// Maintenant, je trace ma route en utilisant le routeur Express et en appelant la fonction du contrôleur qui affiche la page d'accueil
router.get("/", accueilController.accueilView);

module.exports = router; // Export du routeur pour pouvoir l'utiliser dans d'autres parties de l'application