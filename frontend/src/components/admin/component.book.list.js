
import { useState,useEffect } from 'react';
import axios from 'axios';
import { getAllBooks,deleteBook } from "../../services/books.service"
import{Routes,Route,link, Link, BrowserRouter,Outlet, Navigate} from "react-router-dom"


function BookList(){

    let [books,setBooks]=useState([])
    useEffect(()=>{ getBooks()},[])
   
    async function getBooks(){   
        try{
            const result=await getAllBooks()
            console.log(result);
            setBooks(result.data)
        }
        catch(error){
            console.log(error)
        }    
    }
    async function delBook(book){
        try{
             await deleteBook(book) 
              getBooks() 
        }
         catch(error)
         {
            console.log(error)
         }
       
    }
   
    return (
        <div>

       <table class="table table-striped">
            <thead class="thead-dark"> <tr>
               <th scope="col"> Id</th>
               <th scope="col">Nom</th>
               <th scope="col">Description</th>
               <th scope="col">author</th>
               <th  scope="col">Supprimer</th>
               <th  scope="col">Modifier</th>
            </tr>
            </thead>
           <tbody> {books.map((elem,index)=>
            <tr key={elem._id}>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td>{elem.description}</td>
                <td>{elem.author}</td>
                <td><button type="button"class="btn btn-secondary" onClick={()=>delBook(elem._id)}>Supprimer</button></td>
                <td><button type="button"className="btn btn-secondary" ><Link  to={`/books/edit/${elem._id}`}>Modifier </Link></button></td>
            </tr>
            )}</tbody>
            
           
    </table>
    <br/>
    <div>

   <button className="btn btn-secondary" ><Link class="nav-link" to={"/books/Add"}>Ajouter client</Link></button>
   </div>
   </div>
    
        
    
  )
 
  }
       
    

  export default BookList