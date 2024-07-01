import GameState from "./GameState";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  } else {
    return (
      <>
        <button onClick={onReset} className="reset-button mt-6 p-2.5 bg-blue-700 text-white w-60 text-xl">
          Reset
        </button>
      </>
    );
  }
};

export default Reset;
