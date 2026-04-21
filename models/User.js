/**
 * User.js est un modèle qui sert à créer des utilisateurs. Le modèle User est de : id, email, password
 */

// J'importe le module DataTypes de Sequelize pour définir les types de données des champs du modèle User.
const DataTypes = require("sequelize");

// J'importe l'instance de Sequelize que j'ai créée dans le fichier db.js pour pouvoir définir le modèle User en utilisant cette instance.
const sequelize = require("../db"); // les .. permettent de remonter d'un niveau dans l'arborescence des dossiers pour accéder au fichier db.js qui se trouve à la racine du projet
const { Sequelize } = require(".");

/*
module.exports = sequelize.define(
    "User",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true, // L'email doit être unique pour chaque utilisateur
        },
        passwordUser: {
            type: DataTypes.STRING,
        }

    }
    
);
*/

module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: true // L'email doit être unique pour chaque utilisateur
        },
        passwordUser: {
            type: Sequelize.STRING,
        }
    });
    return UserModel;
};