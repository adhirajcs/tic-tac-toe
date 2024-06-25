import { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  return (
    <>
      <div className="body flex flex-col items-center justify-center text-center bg-gray-900 text-white min-h-screen">
        <h1 className="font-bold text-3xl pt-3 pb-5">Tic Tac Toe</h1>
        <Board />
      </div>
    </>
  );
};

export default TicTacToe;
