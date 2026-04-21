const e = require("express");

// Le fichier AuthentificationController.js a pour mission de gerer les authentifications des utilisateurs.
module.exports = {
    registerView: (req, res) => {
        res.render("register");
    },

    // Je cree une methode asynchrone (async)
    registerUser: async (req, res) => {
        console.log("### Controller registerUser appele ###");
        console.log("### Controller - req :", req.body); // Affiche les donnees recues dans la requete POST

        // Je recupere les donnees du formulaire d'inscription a partir de req.body
        const emailUser = req.body.email;
        const passwordUser = req.body.motdepasse;

        console.log("### emailUser :", emailUser);
        console.log("### passwordUser :", passwordUser);

        /* Je m'assure que le mail et le mot de passe sont bien renseignes avant de tenter de les inserer dans la base de donnees. */
        if (!emailUser || !passwordUser) {
            console.log("### Erreur : Email ou mot de passe manquant ###");
            return res.render("register", {
                error: "Veuillez completer tous les champs."
            });
        }

        // Il n'y a pas d'erreur, passe a la suite
        const requeteSql = "INSERT INTO users (id, email, passwordUser) VALUES (?,?, ?)";
        const ordreDonnes = [null, emailUser, passwordUser];

        // J'execute la requete SQL en utilisant la connexion a la base de donnees.
        req.getConnection((err, connection) => {
            if (err) {
                console.log("### Erreur de connexion a la base de donnees ###", err);
                return res.status(500).send("Erreur de connexion a la base de donnees.");
            }

            connection.query(requeteSql, ordreDonnes, (err, nouvelUtilisateur) => {
                if (err) {
                    console.log("### Erreur de requete : ", err);
                    return res.status(500).send("Erreur lors de l'enregistrement de l'utilisateur.");
                }

                console.log("Utilisateur enregistre avec succes :", nouvelUtilisateur);

                // Redirige vers la page d'accueil
                res.redirect("/");
            });
        });
    }
};
