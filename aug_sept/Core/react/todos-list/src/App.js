import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <p className="btn btn-outline-info">There is no spoon</p>
      <h1>To-Dos List</h1>
      <Todos></Todos>
    </div>
  );
}

export default App;
