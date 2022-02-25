import './App.css';
import Navbar from './components/Navbar';
import Itemlist from './components/ItemListContainer';
import CartItem from './components/ItemCount';
import React from 'react';
import getItems from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/web/inicio';
import Nosotros from './components/web/nosotros';
import ItemDetail from './components/ItemDetail';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Itemlist/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/categorias/:id" element={<Itemlist/>}/>
      <Route path="/items/:id" element={<ItemDetail/>}/>
      <Route path="/carrito" element={<CartItem/>}/>
    </Routes>
    
  </BrowserRouter>  
)
}  