import * as React from "react";

function SvgPlus(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M176 448a32 32 0 0032 32h32a32 32 0 0032-32V304h-96zm64-416h-32a32 32 0 00-32 32v144h96V64a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M448 240v32a32 32 0 01-32 32H32a32 32 0 01-32-32v-32a32 32 0 0132-32h384a32 32 0 0132 32z"
        className="plus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPlus;
