//Services : pour envoyer les requetes à la partie services (communication back-front)
//Component : just pour l'affichage

//Il faut installer axios: npm i axios
//Importer Axios: les requetes http vont envoyer à la partie backend en utilisant la bibliotheque Axios
//Crée une instance axios, et commencer à envoyer des requetes à la partie backend

/*import axios from 'axios';

const http=axios.create({
    baseUrl: "http://localhost:8899/",   // Axios instance will be communicating with this url
    headers: {"content-type": "application/json"}  //any data sent through the Axios instance will be sent as JSON data.
})*/

import axios from "axios";
const http=axios.create({
  baseURL:"http://localhost:8899/",
  headers:{"content-type":"application/json"}
})
export default http
