import React, { useState } from "react";
import axios from "axios";

const FetchPokemon = () => {
  let [pokemonList, setPokemonList] = useState([]);

  const getData = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((response) => {
        console.log("response from api is ->", response);
        setPokemonList(response.data.results);
        // console.log(response.data.results);
      })
      .catch((err) => {
        console.log("something went wrong with your response");
      });
    console.log("This is me waiting for the api call to return");
    console.log("like a dog fetching a ball");
  };

  return (
    <div>
      <button onClick={getData}>This is a button</button>
      {pokemonList.map((pokemonObj, idx) => {
        return (
          <div className="container card card-body" key={idx}>
            <ul>
              <li>{pokemonObj.name}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default FetchPokemon;
