import * as React from "react";

function SvgAdjust(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M504 256c0 137-111 248-248 248V8c137 0 248 111 248 248z"
        opacity={0.4}
      />
      <path
        d="M256 8v496C119 504 8 393 8 256S119 8 256 8z"
        className="adjust_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAdjust;
