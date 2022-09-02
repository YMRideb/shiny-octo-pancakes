import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <h1>There is no spoon</h1>
      <UserCard
        firstName={"Alex"}
        lastName={"Miller"}
        userAge={42}
        userHair={"Brown"}
      ></UserCard>
      <UserCard
        firstName={"Roger"}
        lastName={"Anderson"}
        userAge={47}
        userHair={"Blonde"}
      ></UserCard>
      <UserCard
        firstName={"Martha"}
        lastName={"Smith"}
        userAge={41}
        userHair={"Brunette"}
      ></UserCard>
      <UserCard
        firstName={"Thomas"}
        lastName={"Anderson"}
        userAge={-1}
        userHair={"Shiny"}
      ></UserCard>
    </div>
  );
}
export default App;
