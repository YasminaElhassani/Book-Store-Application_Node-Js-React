import http from './http.common'

//On va dévlopper les fonctions qui vont envoyer les requetes vers la partie back

/*export const getAllBooks=async() =>{
    return await http.get("/books")
}
export const getBookById = async(id) =>{
    return await http.get('/books/${id}')
}
export const deleteBook = async(id) =>{
    return await http.delete('/books/${id}')
}
export const addBook = async(book) =>{
    return await http.post('/books', book)
}
export const updateBook = async(book) =>{
    return await http.put('/books/${book.id}',book)
}*/


export async function getAllBooks()
{
    return await http.get("/books")

}

export async function getBookById(id)
{
    return await http.get(`/books/${id}`)

}

export async function addBook(book)
{
   return await http.post("/books",book)
}
export async function deleteBook(id)
{
   return await http.delete(`/books/${id}`)
}

export const updateBook = async(book) =>{
    return await http.put('/books/${book.id}',book)
}



