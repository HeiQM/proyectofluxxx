import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (

    <nav className="navbar navbar-expand-lg bg-dark">  
       <Link className="navbar-brand mx-5  text-warning" to="/" >Cine Sensacional</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
           <ul className="navbar-nav ">
             <li className="nav-item active mx-4">
             <Link to="/peliculas" className="text-warning" >Peliculas</Link>
             </li>
             <li className="nav-item mx-4">
             <Link to="/progtv"className="text-warning"
             > Programas de tv </Link>
             </li>
             <li className="nav-item mx-4">
             <Link to="/person"className="text-warning">Personas</Link>
             </li>
           </ul>
         </div>
       </nav>
  );
}

export default Navbar;
