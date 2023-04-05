//Importer les modèles Book et category
const Book=require("../models/Book")
const Category=require("../models/Category")

//Fonctions qui vont gérer des livres
const getAllBooks=async()=>{
    return await Book.find().populate("category")
}
const createBook=async(b)=>{
    return await Book.create(b)
}
const getBookById=async(id)=>{
    return await Book.findById(id)
}
const deleteBookById=async(id)=>{
    return await Book.findByIdAndDelete(id)
}
const updateBook=async(b)=>{
    return await Book.findByIdAndUpdate(b._id,b)
}

//Fonctions qui vont gérer les catégories¨

const getAllCategories=async()=>{
    return await Category.find()
}
const createCategory=async(c)=>{
    return await Category.create(c)
}
const deleteCategoryById=async(id)=>{
    return await Category.findByIdAndDelete(id)
}

module.exports={
    getAllBooks,
    getBookById,
    createBook,
    deleteBookById,
    updateBook,

    getAllCategories,
    createCategory,
    deleteCategoryById

}