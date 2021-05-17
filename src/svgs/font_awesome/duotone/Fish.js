import * as React from "react";

function SvgFish(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M327.1 96c-90 0-168.54 54.77-212.27 101.63l-87.33-66c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 192a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M446.53 256a32 32 0 11-32-32 32 32 0 0132 32z"
        className="fish_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFish;
