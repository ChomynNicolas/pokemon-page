import {  useState } from "react";
import "./App.css";
import PokemonFetch from "../PokemonFetch/PokemonFetch";
import axios from "axios";


function App() {
  const [pokemons, setpokemons] = useState([]);
  
  

  const cargarPokemons = async () => {
    
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      )
      
      console.log(response.data.results);
      setpokemons(response.data.results);
      
  };
  console.log(pokemons);

  return (
    <div className="container">
      <button onClick={cargarPokemons}>Cargar Pokemons</button>
      <PokemonFetch pokemons={pokemons}/>
    </div>
  );
}

export default App;
