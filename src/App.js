import React from "react";
import "./App.css";
import { Board } from "./components/Board";

export default function App() {
  const boardList = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>
      <Board boardList={boardList} onClick={null} />

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
