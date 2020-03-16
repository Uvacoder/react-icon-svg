import * as React from "react";

function SvgSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 368a16 16 0 01-16 16H80a16 16 0 01-16-16V112a16 16 0 0116-16h288a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M64 400V112a16 16 0 0116-16h288a16 16 0 0116 16v288a16 16 0 01-16 16H80a16 16 0 01-16-16z"
        className="square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSquare;
