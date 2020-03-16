import * as React from "react";

function SvgAngleRight(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M128.14 256l56.47 56.49L88.46 409a23.76 23.76 0 01-33.6.18l-.18-.18-22.51-22.68a23.92 23.92 0 010-33.84z"
        opacity={0.4}
      />
      <path
        d="M54.58 103.07L32 125.81a23.92 23.92 0 000 33.84L184.61 312.5 224 273l.06-.06a24 24 0 00-.16-33.94L88.37 103l-.17-.18a23.78 23.78 0 00-33.62.22z"
        className="angle-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAngleRight;
