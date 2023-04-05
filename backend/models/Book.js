const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name: {type: 'string',required: true},
    description:{type: 'string',required: true},
    isbn:{type: 'string',required: true},
    author:{type: 'string',required: true},
    editor:{type: 'string',required: true},
    date_publication:{type: Date,default:Date.now()}, //date par defaut
    image:{type: 'string'},
    //Association entre livre et catégorie
    category:{
        type: mongoose.Types.ObjectId,  //ObjectId :utilisé pour faire référence aux documents dans d'autres collections
        ref:"Category",  //une référence au modèle "Category". 
        required: true
    }
    

})
const Book = mongoose.model('Book',bookSchema)
module.exports=Book