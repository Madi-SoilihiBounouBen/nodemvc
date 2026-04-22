const db = require("../models"); // J'importe la configuration de la base de données et les modèles Sequelize à partir du fichier index.js dans le dossier models pour pouvoir les utiliser dans ce contrôleur. Cela me permettra d'interagir avec la base de données MySQL en utilisant les modèles définis avec Sequelize, notamment le modèle User pour gérer les utilisateurs dans l'application.

const User = db.users; // J'extrais le modèle User de l'objet db pour pouvoir l'utiliser directement dans ce contrôleur pour interagir avec la table des utilisateurs dans la base de données.

const Op = db.Sequelize.Op; // J'extrais l'opérateur Op de Sequelize pour pouvoir l'utiliser dans les requêtes Sequelize, notamment pour effectuer des opérations de comparaison ou de logique dans les requêtes vers la base de données.

exports.create = (req, res) => {
    const emailUser = req.body.email;
    const passwordUser = req.body.motdepasse;

    const user = {
        email: emailUser,
        passwordUser: passwordUser
    };

    User.create(user).then(data => {
        // Rediriger vers l'accueil après l'inscription
        res.redirect("/");
    }).catch(err => {
        res.status(500).send({
            message: 
            err.message || "Une erreur s'est produite lors de la création de l'user."
        });
    });

};