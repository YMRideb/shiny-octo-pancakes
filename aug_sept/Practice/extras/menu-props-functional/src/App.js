import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Hic Sunt Leones</h1>
      <MenuItem dishName={"Calamari"} price={12}>
        <p>Fried beef over white rice</p>
        <em>May contain allergens: Gluten</em>
      </MenuItem>
      <MenuItem dishName={"Stroganoff"} price={18}></MenuItem>
      <MenuItem dishName={"Steak"} price={10}></MenuItem>
      <MenuItem dishName={"Loaded Potato"} price={8}></MenuItem>
    </div>
  );
}

export default App;
