import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
// import gameOverSoundAsset from "../sounds/game_over.wav";
// import clickSoundAsset from "../sounds/click.wav";
import gameOverSoundAsset from "../sounds/mixkit-achievement-bell.wav";
import clickSoundAsset from "../sounds/mixkit-cool-interface-click-tone.wav";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.1;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.1;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combo: [0, 1, 2], combStrikeClass: "w-full h-1 top-[15%]" },
  { combo: [3, 4, 5], combStrikeClass: "w-full h-1 top-[48%]" },
  { combo: [6, 7, 8], combStrikeClass: "w-full h-1 top-[83%]" },

  // Columns
  { combo: [0, 3, 6], combStrikeClass: "h-full w-1 left-[15.6%]" },
  { combo: [1, 4, 7], combStrikeClass: "h-full w-1 left-[48.7%]" },
  { combo: [2, 5, 8], combStrikeClass: "h-full w-1 left-[82.7%]" },

  // Diagonals
  {
    combo: [0, 4, 8],
    combStrikeClass: "w-[90%] h-1 top-1/2 left-[5%] transform skew-y-[45deg]",
  },
  {
    combo: [2, 4, 6],
    combStrikeClass: "w-[90%] h-1 top-1/2 left-[5%] transform -skew-y-[45deg]",
  },
];

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, combStrikeClass } of winningCombinations) {
    const titleValue1 = tiles[combo[0]];
    const titleValue2 = tiles[combo[1]];
    const titleValue3 = tiles[combo[2]];

    if (
      titleValue1 != null &&
      titleValue1 === titleValue2 &&
      titleValue2 === titleValue3
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
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if(tiles.some((tile) => tile != null)) {
      clickSound.play()
    }
  }, [tiles])

  useEffect(() => {
    if(gameState !== GameState.inProgress) {
      gameOverSound.play()
    }
  }, [gameState])

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
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
      <div className="body flex flex-col items-center justify-center text-center bg-gray-900 text-white min-h-screen">
        <h1 className="font-bold text-3xl pt-3 pb-5">Tic Tac Toe</h1>
        <Board
          playerTurn={playerTurn}
          tiles={tiles}
          onTileClick={handleTileClick}
          strikeClass={strikeClass}
        />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset} />
      </div>
    </>
  );
};

export default TicTacToe;
