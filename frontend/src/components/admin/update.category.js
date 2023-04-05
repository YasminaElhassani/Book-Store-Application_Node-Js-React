import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import{Routes,Route,link, Link, BrowserRouter,Outlet} from "react-router-dom"
import catService from '../services/category.services';

function UpdateCategory(){

    const [nom,setNom]=useState("")
    
    const navigate=useNavigate()
   
    const {id}=useParams()
 
    useEffect(()=>{
        getCat()
    },[])
  async function getCat(){
    const cat = await catService.getCategorieById(id);
    setNom(cat.data.name)

  }
   
    async function submitCat(e){
        e.preventDefault()
        const C={"name":nom}
        await catService.updateCat(id,C)
        navigate("/Category")
    }
    
    return(

        <form onSubmit={(e)=>submitCat(e)}>
              <div class="form-group"> <label htmlFor ="nom">Nom :</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/></div>
            
            <input type="submit"  class="btn btn-primary mb-2"/>
        </form>
    )
}

export default UpdateCategory