import react from "react";
import Carticon from "./Cartwidget";
import './materialize/materialize.css';

const Navbar = () => {
    return (
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">Portafolio</a></li>
        <li><a href="#">Contactenos</a></li>
        <Carticon />
      </ul>      
    </div>
  </nav>
    )
}

export default Navbar;