//Pour crée un projet react: npx creat-react-app frontend
//Pour démarer l'application: npm start


//pour utiliser un système de routage il faut l'installer : npm i react-router-dom
//chaque route correspond à un composant React spécifique. Lorsque l'utilisateur navigue vers une route, 
//le routeur charge automatiquement le composant correspondant et affiche son contenu dans l'interface utilisateur.

import { Routes,Route } from 'react-router-dom';
import './App.css';
import AdminLayout from './components/admin/component.admin.layout';
import NavBar from './components/admin/component.admin.layout';
import BookList from './components/admin/component.book.list';
import BookNew from './components/admin/component.book.new';
import Home from './components/admin/component.home';
import ClientLayout from './components/client/component.client.layout';
import CategoryList from './components/client/component.'
import UpdateCategory from './components/client/component'


/*function App() {
  return (
    //app va afficher la bare de navigation, et aprés il va afficher un composant selon le path 
    //NB: n'oublier pas d'importer Routes et Route à travers react-router-dom

    //On a 2routes principaux, /admin pour l'admin et /home pour le client
    <>
      <Routes>

        <Route path={'/admin'} element={<AdminLayout/>}>
          <Route path={'books'} element={<BookList/>}></Route>
          <Route path={'books/new'} element={<BookNew/>}></Route>
        </Route>
      
        <Route path={'/'} element={<Home/>}></Route>
      </Routes>
    </>
  );
}*/

function App() {
 
  return (
    <>
    <AdminLayout/>
   <div className='container'>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/books' element={<BookList />}/>
       <Route path='/books/Add' element={<BookNew />}/>
       <Route path='/book/update/:id' element={<updatBook />}/>
       <Route path='/Category' element={<CategoryList />}/>
       <Route path='/Category/Add' element={<AddCategory />}/>
      <Route path='/Category/edit/:id' element={<UpdateCategory />}/>
    
     </Routes>
     
   </div>
   
  
   </>
   
  );
}

export default App;
