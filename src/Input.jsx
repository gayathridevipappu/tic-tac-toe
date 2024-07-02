import './Input.css';

function Input(props) {
  const { players, setPlayers, setShowInput } = props;

  const handleChange = (e) => {
    setPlayers({
      ...players,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p>Tic-Tac-Toe</p>
      <div>
        <p>player A</p>
        <input
          name="player1"
          type="text"
          value={players.player1}
          onChange={handleChange}
          className='input_text_box'
        />
      </div>
      <div>
        <p>player B</p>
        <input
          name="player2"
          type="text"
          value={players.player2}
          onChange={handleChange}
          className='input_text_box'
        />
      </div>
      <button
        className='input_start_button'
        onClick={() => setShowInput(false)}
      >
        Start
      </button>
    </div>
  );
}

export default Input;
