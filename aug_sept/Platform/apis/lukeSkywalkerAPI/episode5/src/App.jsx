import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form from './components/Form';
import Info from './components/Info';

function App() {
  return (
    <div className="App container">
      <h1>This is the start of the LukeSkywalker API</h1>
      <Form></Form>
      <Routes>
        {/* this is an example hardcoded to test */}
        {/* <Route exact path="/starships/2" element={<h1>oh yeah thats right</h1>} /> */}
        <Route exact path="/:category/:id" element={<Info></Info>} />
      </Routes>
    </div>
  );
}

export default App;
