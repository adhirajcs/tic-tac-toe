import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };
  return (
    <>
      <div className="body flex flex-col items-center justify-center text-center bg-gray-900 text-white min-h-screen">
        <h1 className="font-bold text-3xl pt-3 pb-5">Tic Tac Toe</h1>
        <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} />
      </div>
    </>
  );
};

export default TicTacToe;
