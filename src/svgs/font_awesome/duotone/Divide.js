import * as React from "react";

function SvgDivide(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M224 160a64 64 0 10-64-64 64 64 0 0064 64zm0 192a64 64 0 1064 64 64 64 0 00-64-64z"
        opacity={0.4}
      />
      <path
        d="M0 240a32 32 0 0132-32h384a32 32 0 0132 32v32a32 32 0 01-32 32H32a32 32 0 01-32-32z"
        className="divide_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDivide;
