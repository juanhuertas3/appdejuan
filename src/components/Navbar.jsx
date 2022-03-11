import react from "react";
import Carticon from "./Cartwidget";
import './materialize/materialize.css';
import {link} from "react-router-dom";
import { CartContext, CartProvider } from "../context/CartContext";
import { useContext } from "react/cjs/react.production.min";

const Navbar = () => { 

  return (
      <>
        <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        <li><a href="/">Inicio</a></li>
        <li><a href="/nosotros">Quienes Somos</a></li>
        <li><a href="/categorias/:id">Categoria</a></li>
        <li><a href="/items/:id">Items</a></li>
        <Carticon />
      </ul>      
    </div>
  </nav>
  </>)
}

export default Navbar;