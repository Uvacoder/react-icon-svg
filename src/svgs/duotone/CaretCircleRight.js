import * as React from "react";

function SvgCaretCircleRight(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm95.5 256.5l-123 123A12 12 0 01208 379V133a12 12 0 0120.5-8.5l123 123a12 12 0 010 17z"
        opacity={0.4}
      />
      <path
        d="M351.5 264.5l-123 123A12 12 0 01208 379V133a12 12 0 0120.5-8.5l123 123a12 12 0 010 17z"
        className="caret-circle-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretCircleRight;
