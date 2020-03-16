import * as React from "react";

function SvgPaintRoller(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M384 160H32a32 32 0 01-32-32V32A32 32 0 0132 0h352a32 32 0 0132 32v96a32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M512 128v64a96 96 0 01-96 96H256v32a32 32 0 0132 32v128a32 32 0 01-32 32h-64a32 32 0 01-32-32V352a32 32 0 0132-32v-32a64 64 0 0164-64h160a32 32 0 0032-32V64a64 64 0 0164 64z"
        className="paint-roller_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPaintRoller;
