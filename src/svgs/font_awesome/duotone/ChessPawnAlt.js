import * as React from "react";

function SvgChessPawnAlt(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M247.16 459.58L224 448v-16a16 16 0 00-16-16H48a16 16 0 00-16 16v16L8.85 459.58A16 16 0 000 473.89V496a16 16 0 0016 16h224a16 16 0 0016-16v-22.11a16 16 0 00-8.84-14.31z"
        opacity={0.4}
      />
      <path
        d="M64 288h14.89A535.84 535.84 0 0164 384h128a535.84 535.84 0 01-14.89-96H192a16 16 0 0016-16v-16a16 16 0 00-16-16h-16.44a80 80 0 10-95.12 0H64a16 16 0 00-16 16v16a16 16 0 0016 16z"
        className="chess-pawn-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChessPawnAlt;
