import React from "react";
import "./App.css";
import { Box } from "./components/Box";

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe App</h1>
      <Box value="X" onClick={null} />
      <footer>
        This project was coded by
        <a
          href="https://github.com/Lilish-Warrior/tic-tac-toe-react"
          target="_blank"
        >
          Lilish Warrior
        </a>
      </footer>
    </div>
  );
}
