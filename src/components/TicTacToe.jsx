import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import ToolTip from "./ToolTip";

import gameOverSoundAsset from "../sounds/mixkit-achievement-bell.wav";
import clickSoundAsset from "../sounds/mixkit-cool-interface-click-tone.wav";
import Footer from "./Footer";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.5;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.8;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combo: [0, 1, 2, 3], combStrikeClass: "w-full h-1 top-[12.5%]" },
  { combo: [4, 5, 6, 7], combStrikeClass: "w-full h-1 top-[37.5%]" },
  { combo: [8, 9, 10, 11], combStrikeClass: "w-full h-1 top-[62.5%]" },
  { combo: [12, 13, 14, 15], combStrikeClass: "w-full h-1 top-[87.5%]" },

  // Columns
  { combo: [0, 4, 8, 12], combStrikeClass: "h-full w-1 left-[12.5%]" },
  { combo: [1, 5, 9, 13], combStrikeClass: "h-full w-1 left-[37.5%]" },
  { combo: [2, 6, 10, 14], combStrikeClass: "h-full w-1 left-[62.5%]" },
  { combo: [3, 7, 11, 15], combStrikeClass: "h-full w-1 left-[87.5%]" },

  // Diagonals
  {
    combo: [0, 5, 10, 15],
    combStrikeClass: "w-[100%] h-1 top-1/2 left-0 transform rotate-[45deg]",
  },
  {
    combo: [3, 6, 9, 12],
    combStrikeClass: "w-[100%] h-1 top-1/2 left-0 transform -rotate-[45deg]",
  },
];

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, combStrikeClass } of winningCombinations) {
    const titleValue1 = tiles[combo[0]];
    const titleValue2 = tiles[combo[1]];
    const titleValue3 = tiles[combo[2]];
    const titleValue4 = tiles[combo[3]];

    if (
      titleValue1 != null &&
      titleValue1 === titleValue2 &&
      titleValue2 === titleValue3 && titleValue3 === titleValue4
    ) {
      setStrikeClass(combStrikeClass);
      if (titleValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else if (titleValue1 === PLAYER_O) {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => {
    return tile !== null;
  });
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
};

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(16).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile != null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(16).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  const handleTileClick = (index) => {
    if (tiles[index] !== null || gameState !== GameState.inProgress) {
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
      <div className="body flex flex-col items-center justify-center text-center bg-gray-900 text-white min-h-screen pb-14">
        {/* LinkedIn and gitHub icons */}
        <ToolTip />

        <h1 className="relative font-bold text-3xl py-5">Tic Tac Toe</h1>
        <Board
          playerTurn={playerTurn}
          tiles={tiles}
          onTileClick={handleTileClick}
          strikeClass={strikeClass}
        />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset} />
        <Footer />
      </div>
    </>
  );
};

export default TicTacToe;
