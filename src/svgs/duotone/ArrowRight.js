import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M24 215h286.4l41.6 41-41.59 41H24c-13.3 0-24-11-24-24.63v-32.82A24.22 24.22 0 0124 215z"
        opacity={0.4}
      />
      <path
        d="M246.31 38.52c.24.23.48.47.71.71L441 238.56a25 25 0 010 34.78L247 472.77a23.38 23.38 0 01-33.11.7c-.24-.22-.47-.46-.7-.7L191.06 450a25.13 25.13 0 01.4-35.18L352.19 256 191.46 97.2a24.94 24.94 0 01-.4-35.18l22.15-22.78a23.38 23.38 0 0133.1-.72z"
        className="arrow-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowRight;
