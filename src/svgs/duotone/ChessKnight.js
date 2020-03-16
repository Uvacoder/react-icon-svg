import * as React from "react";

function SvgChessKnight(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M368 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M159.94 32H12A12 12 0 000 44a16.9 16.9 0 001.79 7.58L16 80l-9 9a24 24 0 00-7 17v137.21a32 32 0 0019 29.26l40.63 18.06a32 32 0 0024.88.47l12.79-5.12a32 32 0 0018.75-20.5l9.22-30.65a24 24 0 0112.55-15.65L159.94 208v50.33a48 48 0 01-26.53 42.94L76.2 329.92A80 80 0 0032 401.48V416h319.86V224c0-106-85.92-192-191.92-192zM52 168a20 20 0 1120-20 20 20 0 01-20 20z"
        className="chess-knight_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChessKnight;
