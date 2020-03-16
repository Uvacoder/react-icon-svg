import * as React from "react";

function SvgCaretCircleLeft(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm48 371a12 12 0 01-20.5 8.5l-123-123a12 12 0 010-17l123-123A12 12 0 01304 133z"
        opacity={0.4}
      />
      <path
        d="M304 379a12 12 0 01-20.5 8.5l-123-123a12 12 0 010-17l123-123A12 12 0 01304 133z"
        className="caret-circle-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretCircleLeft;
