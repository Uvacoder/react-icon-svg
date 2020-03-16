import * as React from "react";

function SvgMinusCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276a12 12 0 01-12 12H124a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M400 284a12 12 0 01-12 12H124a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        className="minus-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMinusCircle;
