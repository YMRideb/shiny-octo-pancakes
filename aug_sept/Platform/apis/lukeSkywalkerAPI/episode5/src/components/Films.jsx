import React from "react";

const Films = (props) => {
  const { deets } = props;
  return (
    <div>
      <h1>{deets.title}</h1>
      <p>
        <b>Episode: </b>
        {deets.episode_id}
      </p>
      <p>
        <b>Director: </b>
        {deets.director}
      </p>
      <p>
        <b>Producer: </b>
        {deets.producer}
      </p>
      <p>
        <b>Release Date: </b>
        {deets.release_date}
      </p>
    </div>
  );
};

export default Films;
