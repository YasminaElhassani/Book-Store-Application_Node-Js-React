import { useState,useEffect } from 'react';
import axios from 'axios';
import catservice from '../services/category.services'
import{Routes,Route,link, Link, BrowserRouter,Outlet, Navigate} from "react-router-dom"
function CategoryList()
{
    let [categories,setCategorie]=useState([])
    useEffect(()=>{ getCategory()},[])
   
    async function getCategory(){   
        try{
            const result=await catservice.getAllCategories()
            setCategorie(result.data)
        }
        catch(error){
            console.log(error)
        }    
    }
    async function supprimerCat(i){
        try{
            if (window.confirm("tous les clients de cette categorie vont etre supprimer" ) == true) {
                
                await catservice.deleteById(i) 
                 getCategory()
              }
        }
         catch(error)
         {
            console.log(error)
         }
       
    }
    
    return (
        <div> <table class="table table-striped">
            <thead class="thead-dark"> <tr>
               <th scope="col"> Id</th>
               <th scope="col">Nom</th>
               <th  scope="col">Supprimer</th>
               <th  scope="col">Modifier</th>
            </tr>
            </thead>
           <tbody> {categories.map((elem,index)=>
            <tr key={elem._id}>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td><button type="button"class="btn btn-secondary" onClick={()=>supprimerCat(elem._id)}>Supprimer</button></td>
                <td><button type="button"class="btn btn-secondary"><Link class="nav-link" to={`/Category/edit/${elem._id}`}>Edit </Link></button></td>

            </tr>
            )}</tbody>
            
           
    </table>
    <br/>
    <div>

   <button className="btn" type="button"class="btn btn-secondary"><Link class="nav-link" to={'/Category/Add'}>Ajouter category </Link></button>
    </div>
    </div>
           
  )
     
}          

  export default CategoryList


