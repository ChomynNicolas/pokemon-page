import { useState } from "react";
import "./App.css";
import PokemonFetch from "../PokemonFetch/PokemonFetch";

function App() {
  const [pokemons, setpokemons] = useState([]);

  const cargarPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const { results } = await response.json();

      setpokemons(results);
    } catch (error) {
      console.log(error);
    }
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
