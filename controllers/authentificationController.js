// Le fichier AuthentificationController.js a pour mission de gérer les authentifications des utilisateurs.
module.exports = {
    registerView : (req, res) => {
        res.render('register');
    },

    // Je crée une méthode asynchrone (async) 
    registerUser: async (req, res) => {
        console.log("### Controller registerUser appelé ###");
        console.log("### Controller - req :", req.body); // Affiche les données reçues dans la requête POST
    }
}
