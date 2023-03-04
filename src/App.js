import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";

export default function App() {
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
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
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
