import React, { useState } from "react";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (value) => {
    return (
      <Square
        value={props.squares[value]}
        index={value}
        handleClick={props.handleClick}
      />
    );
  };

  return (
    <div>
      <h1>Board</h1>
      <div className="container">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
