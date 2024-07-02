import { useState } from 'react';
import './App.css';
import Input from './Input';
import Grid from './Grid';
import { winnerArray } from './utils/constants';

function App() {
  const [input, setInput] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [showInput, setShowInput] = useState(true);
  const [winner, setWinner] = useState();
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
  });

  const handleClick = (index) => {
    if (input[index] == null) {
      input[index] = isXturn ? 'X' : 'O';
      setInput(input);
      setIsXturn(!isXturn);
      getWinner();
    }
  };

  const getWinner = () => {
    winnerArray.map((arr) => {
      if (
        input[arr[0]] == input[arr[1]] &&
        input[arr[0]] == input[arr[2]] &&
        input[arr[0]] !== null
      ) {
        console.log('winner');
        input[arr[0]] == 'X'
          ? setWinner(players.player1)
          : setWinner(players.player2);
      }
    });
    if (input.every((ele) => ele !== null)) {
      setWinner('Tie!');
    }
  };

  const handleRetryClick = () => {
    setShowInput(true);
    setInput(Array(9).fill(null));
    setIsXturn(true);
    setPlayers({ player1: '', player2: '' });
    setWinner();
  };
  return (
    <>
      {winner !== 'Tie!'
        ? winner && <p>{`Hurrayy!! ${winner} won!!!`}</p>
        : winner && <p>{winner}</p>}
      {showInput ? (
        <Input
          players={players}
          setPlayers={setPlayers}
          setShowInput={setShowInput}
        />
      ) : (
        <Grid
          players={players}
          winner={winner}
          handleClick={handleClick}
          input={input}
        />
      )}
      {winner && <button onClick={handleRetryClick}>ReStart</button>}
    </>
  );
}

export default App;
