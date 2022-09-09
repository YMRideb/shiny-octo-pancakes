import React, {useState} from "react";

const FetchPokemon = () => {
  let [pokemon, setPokemon] = useState([]);

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response from api is ->", response);
        setPokemon(response.results);
        // console.log(response);
      })
      .catch((err) => {
        console.log("something went wrong with your response");
      });
  };

  console.log("This is me waiting for the api call to return");
  console.log("like a dog fetching a ball");

  return (
    <div>
      <button onClick={getData}>This is a button</button>
      {pokemon.map((Pokemon, idx) => {
        return (
          <div className="container" key={idx}>
            <div className="card card-body">
              <ul>
                <li>{Pokemon.name}</li>
              </ul>
              {/* <h2>{pokemon.type}</h2>
                        <h2>{pokemon.size}</h2> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FetchPokemon;
