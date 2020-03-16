import * as React from "react";

function SvgUndo(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M123.31 388.69a12 12 0 0116.38-.54 176 176 0 10-29.61-230.61l-46.5 2.22 3.52-64.43A247.45 247.45 0 01256 8c136.66 0 248.1 111.53 248 248.19C503.9 393.07 392.9 504 256 504a247.1 247.1 0 01-166.21-63.88l-.49-.46a12 12 0 010-17z"
        opacity={0.4}
      />
      <path
        d="M11.65 0h48A12 12 0 0171 12.55l-7.42 147.21 147.54-7.06h.58a12 12 0 0112 12V212a12 12 0 01-12 12h-200a12 12 0 01-12-12V12A12 12 0 0111.65 0z"
        className="undo_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUndo;
