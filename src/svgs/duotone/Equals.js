import * as React from "react";

function SvgEquals(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 336v32a32 32 0 01-32 32H32a32 32 0 01-32-32v-32a32 32 0 0132-32h384a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M448 144v32a32 32 0 01-32 32H32a32 32 0 01-32-32v-32a32 32 0 0132-32h384a32 32 0 0132 32z"
        className="equals_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEquals;
