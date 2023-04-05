const catalService = require('../services/catalogue.services')

//l'objet :req, c'est le param qui va recevoir les informations de la requete envoyé par le client
//l'objet :res, le param qui va contenir les informations de la réponce
const getBooks=async(req,res)=>{
    try{
        // appel de la fct getAllBooks() de service 
        const books = await catalService.getAllBooks()
        res.status(200).json(books)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const getBook=async(req,res)=>{
    try{
        const book=await catalService.getBookById(req.params.id)
        res.status(200).json(book)
    }catch(error){
        res.status(500).json(error)
    }
}
const deleteBook=async(req,res)=>{
    try{
        const book=await catalService.deleteBookById(req.params.id)
        res.status(200).json(book)
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}
const updateBook=async(req,res)=>{
    try{
        await catalService.updateBookById(req.body)
        res.status(200).json("Livre bien modifié")
    }catch(error){
        res.status(500).json(error)
    }
}
const addBook=async(req,res)=>{
    try{
        await catalService.createBook(req.body)
        //On peut mettre 201: signifie que le livre a été bien crée
        res.status(200).json("Livre bien ajouté")
    }catch(error){
        res.status(500).json(error)
    }
}
//Catégories

const addCategory=async(req,res)=>{ 
    try{
        await catalService.createCategory(req.body)
        res.status(200).json("Catégorie bien ajouté")
    }catch(error){
        res.status(500).json(error)
    }
}

const getCategories=async(req,res)=>{
    try{
        const categories=await catalService.getAllCategories()
        res.status(200).json(categories)
    }catch(error){
        res.status(500).json(error)
    }
}
const deleteCategory=async(req,res)=>{
    try{
        await catalService.deleteCategoryById(req.params.id)
        res.status(200).json("Catégorie bien supprimée")
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports={
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    addBook,
    getCategories,
    addCategory,
    deleteCategory
    
}