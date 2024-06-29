import Tile from "./Tile";
import Strike from "./Strike";

const Board = ({ tiles, onTileClick, playerTurn }) => {
  return (
    <>
      <div className="board grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] cursor-pointer relative">
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(0);
          }}
          value={tiles[0]}
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(1);
          }}
          value={tiles[1]}
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(2);
          }}
          value={tiles[2]}
          className="
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(3);
          }}
          value={tiles[3]}
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(4);
          }}
          value={tiles[4]}
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(5);
          }}
          value={tiles[5]}
          className="
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(6);
          }}
          value={tiles[6]}
          className="
        right-border border-r-[0.2em] border-r-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(7);
          }}
          value={tiles[7]}
          className="
            right-border border-r-[0.2em] border-r-[#0074a6]"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => {
            onTileClick(8);
          }}
          value={tiles[8]}
        />

        <Strike />
      </div>
    </>
  );
};

export default Board;
