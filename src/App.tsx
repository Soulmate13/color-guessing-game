import './App.css';
import GameBoard from 'components/organisms/GameBoard';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Guess the hex color</h1>
      <GameBoard/>
    </div>
  );
}

export default App;
