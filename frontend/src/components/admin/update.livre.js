import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import{Routes,Route,link, Link, BrowserRouter,Outlet} from "react-router-dom"
import clientService from '../services/book.services';
import catService from '../services/category.services';

function updateBook(){

    const [name,setname]=useState("")
    const [description,setDescription]=useState("")
    const navigate=useNavigate()
    const[category,setCategory]=useState([])
    const[categoryy,setCategoryy]=useState(0)
    const[selectedcategory,setSelectedCategory]=useState([]);
    const {id}=useParams()
 useEffect(()=>
{
    getBookById()
    getcat()
},[])
   async  function getBookById()
   {
    const c=await BookService.getById(id)
    console.log(c)
    setName(c.data.name)
    setDescription(c.data.description)
    setCategoryy(c.data.categoryy)
   }
   async function getcat(){
    const res= await catService.getAllCategories()
    setCategory(res.data)
   }
    async function submitBook(e){
        e.preventDefault()
        const C={"_id":id,"name":name,"description":description,"categoryy":categoryy[selectedcategory]}
       
        await clientService.updateBook(C)
        navigate("/books")
    }
    
    return(

        <form onSubmit={(e)=>submitBook(e)}>
              <div class="form-group"> <label htmlFor ="name">Nom :</label>
            <input type="text" value={nom} onChange={(e)=>setName(e.target.value)} name="name"/><br/></div>
            <div class="form-group"><label htmlFor ="description">Prenom :</label>
            <input type="text" value={prenom}  onChange={(e)=>setDescription(e.target.value)} name="description"/><br/> </div>
            <label>Category</label>
            <select id="cat" onChange={(e)=> setSelectedCategory(e.target.value)} value={categoryy}>
                    {category.map((cat,index)=>{
                       
                        return(
                            <option value={index}>{cat.name}</option>
                        )
                    }
                    )}
                    </select><br/>
            <input type="submit"  class="btn btn-primary mb-2"/>
        </form>
    )
}

export default updateBook