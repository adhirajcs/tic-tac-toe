const Tile = ({ className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  if (value === null && playerTurn !== null) {
    if (playerTurn === "X") {
      hoverClass = "hover:after:opacity-40 hover:after:content-['X']";
    } else if (playerTurn === "O") {
      hoverClass = "hover:after:opacity-40 hover:after:content-['O']";
    }
  }
  return (
    <>
      <div
        onClick={onClick}
        className={`title flex text-current text-2xl justify-center items-center ${className} ${hoverClass}`}
      >
        {value}
      </div>
    </>
  );
};

export default Tile;
