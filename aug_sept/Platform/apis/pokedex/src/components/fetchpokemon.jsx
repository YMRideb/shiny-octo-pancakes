import React from "react";

const FetchPokemon = ()=>{
    fetch("www.pokedexapi.com")
    .then(response=>{
        return response.json()
    })
    .then(response=>{
        console.log("response from api is ->", response)
    })

    return(
        <div>
            <button>This is a button</button>
        </div>
    )
}
export default FetchPokemon;