import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const handleClick = (num) => {
    let squarelist = [...squares];

    if (player === true) {
      squarelist[num] = "X";
      setPlayer(false);
      setSquares(squarelist);
    } else {
      squarelist[num] = "O";
      setPlayer(true);
      setSquares(squarelist);
    }
  };

  return (
    <div>
      <Board squares={squares} player={player} handleClick={handleClick} />
    </div>
  );
};

export default Game;
