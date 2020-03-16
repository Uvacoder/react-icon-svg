import * as React from "react";

function SvgUserAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M400 144A144 144 0 11256 0a144 144 0 01144 144z" opacity={0.4} />
      <path
        d="M384 320h-55.1a174.1 174.1 0 01-145.8 0H128A128 128 0 000 448v16a48 48 0 0048 48h416a48 48 0 0048-48v-16a128 128 0 00-128-128z"
        className="user-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserAlt;
