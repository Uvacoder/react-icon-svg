import * as React from "react";

function SvgLessThanEqual(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M24 400h400a24 24 0 0124 24v48a24 24 0 01-24 24H24a24 24 0 01-24-24v-48a24 24 0 0124-24z"
        opacity={0.4}
      />
      <path
        d="M392.77 107.69l-175.56 68.09 175.44 68.05c18.39 6 27.89 24.39 21.21 41l-12.09 30.08c-6.67 16.61-27 25.18-45.38 19.15L55 214.19c-13.79-4.52-23-16.61-23-30.19v-16c0-13.57 9.21-25.66 23-30.18l301.71-120c18.29-6 38.51 2.53 45.15 19.06l12 29.92c6.65 16.62-2.8 34.89-21.09 40.89z"
        className="less-than-equal_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLessThanEqual;
