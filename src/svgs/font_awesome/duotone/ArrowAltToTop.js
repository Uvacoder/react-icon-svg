import * as React from "react";

function SvgArrowAltToTop(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M24 32h336a23.94 23.94 0 0124 23.88V72a23.94 23.94 0 01-23.88 24H24A23.94 23.94 0 010 72.12V56a23.94 23.94 0 0123.88-24z"
        opacity={0.4}
      />
      <path
        d="M232.11 480H152a24 24 0 01-24-24V320H40c-17.82 0-26.73-21.51-14.12-34.11l152.45-152.26a19.4 19.4 0 0127.34 0l152.42 152.23C370.7 298.46 361.79 320 344 320h-87.83v136a24 24 0 01-24 24z"
        className="arrow-alt-to-top_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowAltToTop;
