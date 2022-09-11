import React from 'react';

const Planets = (props) => {
    const {deets} = props;
    return (
      <div>
        <h1>{deets.name}</h1>
        <p>
          <b>Diameter:</b>
          {deets.diameter}
        </p>
        <p>
          <b>Climate: </b>
          {deets.climate}
        </p>
        <p>
          <b>Terrain: </b>
          {deets.terrain}
        </p>
        <p>
          <b>Population: </b>
          {deets.population}
        </p>
      </div>
    );
};


export default Planets;