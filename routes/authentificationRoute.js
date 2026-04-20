// Le fichier authentificationRoute.js a pour mission de tracer les routes pour enregistrer ou crée un utilisateur.

// J'importe le module Express pour pouvoir créer un routeur et gérer les routes d'authentification.
const express = require("express");

// J'importe le contrôleur d'authentification pour pouvoir utiliser les méthodes qu'il contient pour gérer les routes d'authentification.
const authentificationController = require("../controllers/authentificationController");

// Je crée un routeur Express pour gérer les routes d'authentification séparément du reste de l'application.
const router = express.Router();

// Je trace la route pour afficher le formulaire d'inscription en utilisant la méthode GET, car on veut juste afficher une page sans envoyer de données. La route est "/register" et elle appelle la méthode registerView du contrôleur d'authentification.
router.get("/register", authentificationController.registerView);

// Je trace la route pour enregistrer un utilisateur en utilisant la méthode POST, car on envoie des données (email et password) pour créer un nouvel utilisateur. La route est "/register" et elle appelle la méthode registerUser du contrôleur d'authentification.
router.post("/register", authentificationController.registerUser);

// J'exporte le "router" pour le rendre disponible dans d'autres parties de l'application, notamment dans le fichier app.js où je vais l'utiliser pour gérer les routes d'authentification.
module.exports = router;