const express=require("express");
const router=express.Router()
const catalConrolleur=require("../controllers/catalogue.controller")

//qui va faire l'association entre les fonctions qui vont envoyer la réponse à une requete 
//le path /books va nous rediriger vers la fonction getBooks de controlleur catalController

//router.get("/books",catalConrolleur.getBooks)
//router.post("/books",catalConrolleur.addBook)
//lorsque un route se répète, au lieu de déclarer les deux routes, on peut les rassembler 
router.route("/").get(catalConrolleur.getBooks)
                      .post(catalConrolleur.addBook)

router.route("/:id").put(catalConrolleur.updateBook)
                          .delete(catalConrolleur.deleteBook)
                          .get(catalConrolleur.getBook)


module.exports=router

