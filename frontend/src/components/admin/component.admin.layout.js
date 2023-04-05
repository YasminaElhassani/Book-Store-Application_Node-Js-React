import{Link, Outlet} from "react-router-dom"

function AdminLayout()
{
    return (
    <> 
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li><a class="nav-link"><Link class="nav-link"  to={"/"}>Acceuil</Link> </a>
 </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link class="nav-link" to={"/books"}>Books</Link> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link class="nav-link" to={"/Category"}>Category</Link> </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link class="nav-link" to={"/Contact"}>Contact</Link> </a>
      </li>
      
      
    </ul>
  </div>
</nav>
<Outlet></Outlet>
   </>
    )
}
export default AdminLayout