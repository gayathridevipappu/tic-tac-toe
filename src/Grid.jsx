import './Grid.css';

function Grid(props) {
  const { players, winner, handleClick, input } = props;
  return (
    <>
      <p>{`${players.player1}: X     ${players.player2}: O`}</p>
      <div>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(0)}
        >
          {input[0]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(1)}
        >
          {input[1]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(2)}
        >
          {input[2]}
        </button>
      </div>
      <div>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(3)}
        >
          {input[3]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(4)}
        >
          {input[4]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(5)}
        >
          {input[5]}
        </button>
      </div>
      <div>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(6)}
        >
          {input[6]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(7)}
        >
          {input[7]}
        </button>
        <button
          className="grid_buttons"
          disabled={winner}
          onClick={() => handleClick(8)}
        >
          {input[8]}
        </button>
      </div>
    </>
  );
}

export default Grid;
