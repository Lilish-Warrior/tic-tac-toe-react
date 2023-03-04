import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";

export default function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [boardList, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updateBoard = boardList.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    checkWinner(updateBoard);
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (boardList) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (
        boardList[x] &&
        boardList[x] === boardList[y] &&
        boardList[y] === boardList[z]
      ) {
        console.log(boardList[x]);
        return boardList[x];
      }
    }
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>
      <Board boardList={boardList} onClick={handleBoxClick} />

      <footer>
        This project was coded by
        <a
          href="https://github.com/Lilish-Warrior/tic-tac-toe-react"
          target="_blank"
          rel="noreferrer"
        >
          Lilish Warrior
        </a>
      </footer>
    </div>
  );
}
