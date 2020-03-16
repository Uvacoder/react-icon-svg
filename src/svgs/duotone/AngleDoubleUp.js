import * as React from "react";

function SvgAngleDoubleUp(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M177 256l136 135.63a23.78 23.78 0 010 33.8L290.36 448a23.94 23.94 0 01-33.89 0l-96.37-96.16L63.73 448a23.94 23.94 0 01-33.89 0L7.05 425.53a23.78 23.78 0 010-33.8L143 256.12a23.94 23.94 0 0134-.1z"
        opacity={0.4}
      />
      <path
        d="M177 64.11l136 135.55a23.77 23.77 0 010 33.79L290.26 256a23.94 23.94 0 01-33.89 0L160 159.89l-96.47 96a23.94 23.94 0 01-33.89 0L7.05 233.35a23.77 23.77 0 010-33.79L143 64a24 24 0 0134 .11z"
        className="angle-double-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAngleDoubleUp;
