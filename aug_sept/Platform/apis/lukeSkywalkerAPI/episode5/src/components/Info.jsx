import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import People from "./People";
import Planets from "./Planets";
import Films from "./Films";
import Starships from "./Starships";

const Info = () => {
  //when a state variable updates, the component rerenders, when the component rereneders, all the code re-runs
  //with useEffect, the code inside that block only runs on the first render, or when a dependency changes
  // in the dependecy Array, or second parameter
  const [deets, setDeets] = useState({});
  const {category, id} = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${category}/${id}`)
      .then((response) => {
        // console.log("response is this:", response);
        setDeets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, id]);

  return (
    <div className="d-flex justify-content-around align-items-lg-center">
      {
        category == "people"?
        <People deets={deets}></People>: category == "planets"?
        <Planets deets={deets}></Planets>: category =="films"?
        <Films deets={deets}></Films>: category == "starships"?
        <Starships deets={deets}></Starships>:null
      }
    </div>
  );
};

export default Info;
