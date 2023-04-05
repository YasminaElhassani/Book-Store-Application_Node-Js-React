//Pour initialiser un projet nodeJs: npm i -y =>création d'un fichier json
//Packages à installer: npm i express, npm i mongoose, npm i dotenv
//pour démarer l'application : node index.js ou nodemon index.js

const mongoose = require('mongoose')
const express = require('express')
const app = express()
//Installer cors: npm i cors=> autouriser la récupération des requetes de backend pour les afficher au front
const cors=require('cors')
const catRoutes=require("./routes/categoryRoutes")
const bookRoutes=require("./routes/bookRoutes")
const userRoutes=require("./routes/userRoutes")

app.use(cors())
app.use(express.json())
app.use("/categories",catRoutes)
app.use("/books",bookRoutes)
app.use("/users",userRoutes)

require("dotenv").config()

mongoose.connect(process.env.MONGO_URL).then(result =>
  app.listen(process.env.PORT,()=> {
    console.log("server is running")
  })
).catch(error => console.log(error))





