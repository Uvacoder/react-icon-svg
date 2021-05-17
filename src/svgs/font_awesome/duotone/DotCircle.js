import * as React from "react";

function SvgDotCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm124.45 372.45A176 176 0 11432 256a174.85 174.85 0 01-51.55 124.45z"
        opacity={0.4}
      />
      <path
        d="M256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z"
        className="dot-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDotCircle;
