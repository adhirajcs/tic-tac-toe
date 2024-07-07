import Tile from "./Tile";
import Strike from "./Strike";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <>
      <div className="board grid grid-cols-[100px_100px_100px_100px] grid-rows-[100px_100px_100px_100px] cursor-pointer relative">
        {tiles.map((tile, index) => {
          const rightBorderClass =
            (index + 1) % 4 !== 0
              ? "right-border border-r-[0.2em] border-r-[#0074a6]"
              : "";
          const bottomBorderClass =
            index < 12
              ? "bottom-border border-b-[0.2em] border-b-[#0074a6]"
              : "";

          return (
            <Tile
              key={index}
              playerTurn={playerTurn}
              onClick={() => onTileClick(index)}
              value={tile}
              className={`${rightBorderClass} ${bottomBorderClass}`}
            />
          );
        })}

        <Strike strikeClass={strikeClass} />
      </div>
    </>
  );
};

export default Board;
