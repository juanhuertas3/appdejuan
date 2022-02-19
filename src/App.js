import './App.css';
import Navbar from './components/Navbar';
import Saludo from './components/ItemListContainer';
import CartItem from './components/ItemCount';
import React from 'react';
import laPromesa from './components/item';

export default function App() {
  return (
    <div>
      <Navbar />
      <Saludo nombre="Fernando Galdós" ciudad="Bogota"/><br/>
      <laPromesa />
    </div>
);
}  