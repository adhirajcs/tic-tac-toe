import Tile from "./Tile";
import Strike from "./Strike";

const Board = () => {
  return (
    <>
      <div className="board grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] cursor-pointer relative">
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6] 
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        bottom-border border-b-[0.2em] border-b-[#0074a6]"
        />
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6]"
        />
        <Tile
          className="
        right-border border-r-[0.2em] border-r-[#0074a6]"
        />
        <Tile />

        <Strike />
      </div>
    </>
  );
};

export default Board;
