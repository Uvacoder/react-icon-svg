import * as React from "react";

function SvgAngleLeft(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M223.83 352.44a24 24 0 010 33.86L201.32 409l-.18.18a23.76 23.76 0 01-33.6-.18l-96.15-96.5 56.47-56.5z"
        opacity={0.4}
      />
      <path
        d="M167.81 102.87l-.17.18L32.11 239a24 24 0 00-.17 33.93l.06.07 39.39 39.51L224 159.66a23.92 23.92 0 000-33.84l-22.54-22.74a23.77 23.77 0 00-33.62-.23z"
        className="angle-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAngleLeft;
