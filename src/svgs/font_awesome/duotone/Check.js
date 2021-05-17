import * as React from "react";

function SvgCheck(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M504.5 144.42L264.75 385.5 192 312.59l240.11-241a25.49 25.49 0 0136.06-.14l.14.14L504.5 108a25.86 25.86 0 010 36.42z"
        opacity={0.4}
      />
      <path
        d="M264.67 385.59l-54.57 54.87a25.5 25.5 0 01-36.06.14l-.14-.14L7.5 273.1a25.84 25.84 0 010-36.41l36.2-36.41a25.49 25.49 0 0136-.17l.16.17z"
        className="check_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheck;
