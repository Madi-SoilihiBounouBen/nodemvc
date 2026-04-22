module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "marouvatou27BNR**",//pas sécurisé de l'écrire ici
    DB: "maygourmet",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
};

/**
 * Les paramètres HOST, USER, PASSWORD, DB et dialect sont utilisés pour se connecter à MySql.
 * Le paramètre pool est utilisé pour Squelize :
 * max : nombre maximum de connexions dans le pool
 * min : nombre minimum de connexions dans le pool
 * acquire : temps maximum (en millisecondes) que le pool attendra pour une connexion avant de générer une erreur
 * idle : temps maximum (en millisecondes) qu'une connexion peut rester inactive dans le pool avant d'être fermée (crache si une connexion reste inactive trop longtemps)
 */
