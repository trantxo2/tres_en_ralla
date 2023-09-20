/* eslint-disable react/prop-types */
import { Square } from "./Square";

export const GameBoard = ({ board, updateBoard }) => {
  return (
    <div className="game">
      {board.map((value, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {value}
        </Square>
      ))}
    </div>
  );
};
