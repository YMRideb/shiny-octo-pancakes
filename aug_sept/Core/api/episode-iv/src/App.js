import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
    
const Location = (props) => {
  return (
    <h1>Location Component Loaded!</h1>
  );
}
    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}
    
export default App;
