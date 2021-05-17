import * as React from "react";

function SvgChessKing(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 448H48a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M416 160H256v-48h40a8 8 0 008-8V56a8 8 0 00-8-8h-40V8a8 8 0 00-8-8h-48a8 8 0 00-8 8v40h-40a8 8 0 00-8 8v48a8 8 0 008 8h40v48H32a32 32 0 00-30.52 41.54L74.56 416h298.88l73.08-214.46A32 32 0 00416 160z"
        className="chess-king_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChessKing;
