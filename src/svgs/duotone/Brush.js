import * as React from "react";

function SvgBrush(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 32v224H0V32A32 32 0 0132 0h320a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M0 288v32a64 64 0 0064 64h64v64a64 64 0 00128 0v-64h64a64 64 0 0064-64v-32zm192 184a24 24 0 1124-24 24 24 0 01-24 24z"
        className="brush_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBrush;
