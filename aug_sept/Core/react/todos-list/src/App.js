import './App.css';
import Todos from './components/Todos';
// import todolist from './components/todolist';

function App() {
  return (
    <div className="App">
      <p className="btn btn-outline-info">There is no spoon</p>
      <h1>To-Dos List</h1>
      <Todos></Todos>
      {/* <todolist></todolist> */}
    </div>
  );
}

export default App;
