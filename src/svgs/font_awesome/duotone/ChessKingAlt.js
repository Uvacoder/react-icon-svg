import * as React from "react";

function SvgChessKingAlt(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M279.16 459.58L256 448v-16a16 16 0 00-16-16H80a16 16 0 00-16 16v16l-23.15 11.58A16 16 0 0032 473.89V496a16 16 0 0016 16h224a16 16 0 0016-16v-22.11a16 16 0 00-8.84-14.31z"
        opacity={0.4}
      />
      <path
        d="M106 208H96a16 16 0 00-16 16v16a16 16 0 0016 16h15.94A535.78 535.78 0 0196 384h128a535.78 535.78 0 01-15.94-128H224a16 16 0 0016-16v-16a16 16 0 00-16-16h-10l33.89-90.38a16 16 0 00-15-21.62H176V64h24a8 8 0 008-8V40a8 8 0 00-8-8h-24V8a8 8 0 00-8-8h-16a8 8 0 00-8 8v24h-24a8 8 0 00-8 8v16a8 8 0 008 8h24v32H87.09a16 16 0 00-15 21.62z"
        className="chess-king-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChessKingAlt;
