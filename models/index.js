// Je crée un fichier index.js dans le dossier models pour centraliser la configuration de la base de données et l'importation des modèles Sequelize. Ce fichier va permettre de connecter à la base de données et d'exporter les modèles pour les utiliser dans d'autres parties de l'application.
const dbConfig = require("../config/db.config.js"); // J'importe la configuration de la base de données à partir du fichier db.config.js pour pouvoir l'utiliser pour configurer la connexion à la base de données avec Sequelize.

// J'importe le module Sequelize pour pouvoir utiliser Sequelize comme ORM (Object-Relational Mapping) pour interagir avec la base de données MySQL de manière plus facile et structurée.
const Sequelize = require("sequelize");


// Je crée une instance de Sequelize en utilisant les paramètres de connexion définis dans dbConfig. Je lui passe les informations d'hôte, d'utilisateur, de mot de passe et de dialecte pour configurer la connexion à la base de données MySQL. Je configure également les options de pool pour gérer les connexions à la base de données.
const sequelize = new Sequelize(dbConfig.HOST, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, // L'hôte de la base de données MySQL
    dialect: dbConfig.dialect, // Le dialecte de la base de données, dans ce cas "mysql" pour indiquer que nous utilisons MySQL comme système de gestion de base de données
    operatorsAliases: false, // Cette option est utilisée pour désactiver les alias d'opérateurs obsolètes dans Sequelize. En la mettant à false, on évite les avertissements liés à l'utilisation d'alias d'opérateurs qui ne sont plus recommandés dans les versions récentes de Sequelize.


    // Les options de pool sont utilisées pour gérer les connexions à la base de données. Elles définissent le nombre maximum et minimum de connexions dans le pool, ainsi que les temps d'attente pour l'acquisition et l'inactivité des connexions.
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});



// Je crée un objet db pour stocker les modèles Sequelize et la connexion à la base de données. Je vais ajouter les modèles à cet objet pour pouvoir les exporter et les utiliser dans d'autres parties de l'application.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// J'importe le modèle User à partir du fichier User.js et je l'ajoute à l'objet db. Je lui passe la connexion Sequelize
db.users = require("./User")(sequelize, Sequelize);

module.exports = db; // J'exporte l'objet db pour le rendre disponible dans d'autres parties de l'application, notamment dans les contrôleurs où je vais utiliser les modèles pour interagir avec la base de données.