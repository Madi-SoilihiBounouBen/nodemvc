/**
 * Permet à Sequelize de se connecter à la base de données
 */

// Import de Sequelize
const Sequelize = require("sequelize"); 

// Import de la configuration de la base de données. Je vais créer une instance de Sequelize en utilisant les informations de connexion à la base de données. Je spécifie le nom de la base de données, le nom d'utilisateur, le mot de passe, l'hôte et le dialecte (MySQL dans ce cas).
const sequelize = new Sequelize("mygourmet", "root", "marouvatou27BNR**", {
    host: "localhost",
    dialect: "mysql",
}
);

// module.exports est utilisé pour exporter l'instance de Sequelize afin qu'elle puisse être utilisée dans d'autres parties de l'application, notamment dans les modèles pour définir les schémas de la base de données et effectuer des opérations CRUD.
module.exports = sequelize;