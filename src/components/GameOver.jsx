import GameState from "./GameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerXWins:
      return <div className="game-over text-center border-blue-600 border-4 border-double p-2.5 mt-12 text-xl">X Wins!</div>;
    case GameState.playerOWins:
      return <div className="game-over text-center border-blue-600 border-4 border-double p-2.5 mt-12 text-xl">O Wins!</div>;
      case GameState.draw:
        return <div className="game-over text-center border-blue-600 border-4 border-double p-2.5 mt-12 text-xl">Draw!!!</div>;
      default:
      return <></>;
  }
};

export default GameOver;
