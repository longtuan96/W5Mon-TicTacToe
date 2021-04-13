import React, { useState } from "react";
import Board from "./Board";
import History from "./History";
import PlayerInfo from "./PlayerInfo";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");
  const [gameOn, setGameOn] = useState(true);
  const [data, setData] = useState([]);
  const [step, setStep] = useState(0);
  const [chooseHistory, setChooseHistory] = useState(false);
  const handleClick = (num) => {
    if (gameOn) {
      let newData = data.slice(0, step + 1);
      console.log("newdata", newData);
      let squarelist = [...squares];
      if (squarelist[num] !== null) return;

      squarelist[num] = player ? "X" : "O";
      setPlayer(false);
      console.log("hhhhh", [...newData, squarelist]);
      setData([...newData, squarelist]);

      setSquares(squarelist);

      setStep(newData.length);
      xWon(squarelist);
      oWon(squarelist);
    }

    //  else if (gameOn === true) {
    //   if (squarelist[num] === null) {
    //     if (player === true) {
    //       squarelist[num] = "X";
    //       setPlayer(false);
    //       console.log("hhhhh", [...newData, squarelist]);
    //       setData([...newData, squarelist]);

    //       setSquares(squarelist);
    //     } else {
    //       squarelist[num] = "O";
    //       setPlayer(true);

    //       setData([...data, squarelist]);
    //       setSquares(squarelist);
    //     }
    //   }
    //   console.log("data: ", data);
    //   xWon(squarelist);
    //   oWon(squarelist);
    // }
  };
  const handleClickHistory = (index) => {
    console.log("click history");
    // setGameOn(false);
    setStep(index);
    console.log("index", index);
    setSquares(data[index]);
  };

  const xWon = (list) => {
    let result =
      list[0] + list[1] + list[2] === "XXX" ||
      list[0] + list[4] + list[8] === "XXX" ||
      list[0] + list[3] + list[6] === "XXX" ||
      list[3] + list[4] + list[5] === "XXX" ||
      list[1] + list[4] + list[7] === "XXX" ||
      list[6] + list[7] + list[8] === "XXX" ||
      list[2] + list[5] + list[8] === "XXX" ||
      list[2] + list[4] + list[6] === "XXX";
    if (result) {
      setGameOn(false);
      setWinner("X");
    }
  };
  const oWon = (list) => {
    let result =
      list[0] + list[1] + list[2] === "OOO" ||
      list[0] + list[4] + list[8] === "OOO" ||
      list[0] + list[3] + list[6] === "OOO" ||
      list[3] + list[4] + list[5] === "OOO" ||
      list[1] + list[4] + list[7] === "OOO" ||
      list[6] + list[7] + list[8] === "OOO" ||
      list[2] + list[5] + list[8] === "OOO" ||
      list[2] + list[4] + list[6] === "OOO";
    if (result) {
      setGameOn(false);
      setWinner("O");
    }
  };

  return (
    <div className="d-flex">
      <div>
        <Board squares={squares} player={player} handleClick={handleClick} />
        <PlayerInfo winner={winner} />
      </div>
      <div>
        <h1>History:</h1>
        {data &&
          data.map((item, itemIndex) => (
            <History
              squares={item}
              key={itemIndex}
              index={itemIndex}
              handleClickHistory={handleClickHistory}
            />
          ))}
      </div>
    </div>
  );
};

export default Game;
