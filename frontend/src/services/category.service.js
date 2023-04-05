import http from "./http.common"
async function getAllCategories()
{
    return await http.get("/Categories")

}
async function getCategorieById(id)
{
    return await http.get(`Categories/${id}`)

}

async function AddCategory(Category)
{
   return await http.post("/Categories",Category)
}
async function deleteById(id)
{
   return await http.delete(`Categories/${id}`)
}

async function updateCat(id,Categories)
{
   return await http.put(`/Categories/${id}`,Categories)
}

const catService={getAllCategories,AddCategory,deleteById,updateCat,getCategorieById}
export default catService