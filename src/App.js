import './App.css';
import Navbar from './components/Navbar';
import Saludo from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Saludo nombre="Juan Sebastian" ciudad="Bogota"/>  
    </div>
);
}  

export default App;
