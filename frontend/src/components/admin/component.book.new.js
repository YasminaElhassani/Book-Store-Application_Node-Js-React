import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../services/books.service";



function BookNew(){

const [name,setName]=useState("")   
const [description,setDescription]=useState("")
const [isbn,setISBN]=useState("")
const [author,setAuthor]=useState("")
const [editor,setEditor]=useState("")
//Navigate: pour faire la redirection vers la liste des book après l'ajout 
const navigate=useNavigate()

async function handelForm(event){
    event.preventDefault() //eviter d'actualiser le formulaire 
    const book={"name":name,"description":description,"isbn":isbn,"author":author,"editor":editor}
    addBook(book)
    navigate("/books")
}

    return(
        <div className="container">
            <form onSubmit={event=>handelForm(event)}>
            <label className="mt-4 form-label" htmlFor="name">Nom :</label>
            <input className="form-control" onChange={e=>setName(e.target.value)} type="text" id="name"></input>
            <label className="form-label"  htmlFor="description">Description :</label>
            <input className="form-control" onChange={e=>setDescription(e.target.value)} type="text" id="description"></input>
            <label className="form-label"  htmlFor="isbn">ISBN:</label>
            <input className="form-control" onChange={e=>setISBN(e.target.value)} type="text" id="isbn"></input>
            <label className="form-label"   htmlFor="author">Auteur :</label>
            <input className="form-control" onChange={e=>setAuthor(e.target.value)} type="text" id="author"></input>
            <label className="form-label"  htmlFor="editor">Editeur :</label>
            <input className="form-control" onChange={e=>setEditor(e.target.value)} type="text" id="editor"></input>

            <input className="m-2 btn btn-primary" type="submit" value="Enregister"></input>
            <input className="m-2 btn btn-primary" type="reset" value="Annuler"></input>
        </form>
        </div>
    )
}
export default BookNew