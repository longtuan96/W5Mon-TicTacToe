import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (num) => {
    let squarelist = [...squares];
    squarelist[num] = "X";
    setSquares(squarelist);
  };
  return (
    <div>
      <Board squares={squares} handleClick={handleClick} />
    </div>
  );
};

export default Game;
