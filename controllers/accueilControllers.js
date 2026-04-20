/**
 * Ce fichier est un contrôleur
 * Dans ce fichier, je créer la logique de la page d'accueil.ejs
 */

module.exports = {
    accueilView: (req, res) => {
        res.render('accueil');
    }
}