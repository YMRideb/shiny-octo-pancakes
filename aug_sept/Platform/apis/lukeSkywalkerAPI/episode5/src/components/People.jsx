import React from "react";

const People = (props) => {
    const {deets} = props;
  return (
    <div>
      <h1>{deets.name}</h1>
      <p>
        <b>Height:</b> {deets.height}
      </p>
      <p>
        <b>Mass:</b> {deets.mass} <b>kg</b>
      </p>
      <p>
        <b>Hair Color:</b> {deets.hair_color}
      </p>
      <p>
        <b>Skin Color:</b> {deets.skin_color}
      </p>
    </div>
  );
};

export default People;
