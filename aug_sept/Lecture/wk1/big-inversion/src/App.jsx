import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <UserCard firstName="Alex" lastName="Miller">
        <p>Age: 42</p>
        <p>Hair color: Black</p>
      </UserCard>
      <UserCard firstName="Roger" lastName="Anderson">
        <p>Age: 47</p>
        <p>Hair color: Blonde</p>
      </UserCard>
      <UserCard firstName="Martha" lastName="Smith">
        <p>Age: 41</p>
        <p>Hair color: Brunette</p>
      </UserCard>
      <UserCard firstName="Thomas" lastName="Anderson">
        <p>Age: -1</p>
        <p>Hair color: Shiny</p>
      </UserCard>
    </div>
  );
}

export default App;
