import React from "react";
import "./Board.css";
import { Box } from "./Box";

export const Board = ({ boardList, onClick }) => {
  return (
    <div className="board">
      {boardList.map((value, idx) => {
        return <Box value={value} onClick={() => onClick(idx)} />;
      })}
    </div>
  );
};
