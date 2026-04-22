/**
 * User.js est un modele qui sert a creer des utilisateurs.
 * Le modele User contient : id, email, passwordUser.
 */

// J'importe DataTypes depuis Sequelize pour definir les types de donnees du modele User.
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const UserModel = sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true // L'email doit etre unique pour chaque utilisateur
            },
            passwordUser: {
                type: DataTypes.STRING,
            }
        },
        {
            timestamps: false
        }
    );

    return UserModel;
};
