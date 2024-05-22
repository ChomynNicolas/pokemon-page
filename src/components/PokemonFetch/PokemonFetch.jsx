import React from "react";







export default function PokemonFetch(props) {
  return (
    <ul>
  {props.pokemons.map((pokemon, index)=>{
    return (<li key={index}>{pokemon.name}</li>)
  })
    
    

  }
    </ul>
  );
}
