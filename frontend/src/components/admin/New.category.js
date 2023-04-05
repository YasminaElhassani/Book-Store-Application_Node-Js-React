import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import catService from '../services/category.services';

function AddCategory()
{
    const [nom,setNom]=useState("")
    const navigate=useNavigate()
   
    async function submitCat(e){
        e.preventDefault()
        const C={"name":nom}
        await catService.AddCategory(C)
        navigate("/Category")
    }
    
    return(

        <form onSubmit={(e)=>submitCat(e)}>
            <div class="form-group"> 
            <label htmlFor ="nom">Nom :</label>
            </div>
            <div class="form-group">
                <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} name="nom"/><br/>
            </div>           
            <input  class="btn btn-primary mb-2" type="submit" />
           
        </form>
    )
}

export default AddCategory;