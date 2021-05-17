import * as React from "react";

function SvgMinusSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-32 252a12 12 0 01-12 12H92a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M368 228v56a12 12 0 01-12 12H92a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        className="minus-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMinusSquare;
