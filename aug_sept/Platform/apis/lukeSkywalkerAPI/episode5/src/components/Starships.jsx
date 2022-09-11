import React from 'react';

const Starships = (props) => {
    const {deets} = props;
    return (
        <div>
            <h1>{deets.name}</h1>
            <p><b>Model: {deets.model}</b></p>
            <p><b>Manufacturer: </b>{deets.manufacturer}</p>
            <p><b>Passengers: </b>{deets.passengers}</p>
            <p><b>Cost: </b>{deets.cost_in_credits}(cost in galactic credits)</p>
        </div>
    );
};


export default Starships;