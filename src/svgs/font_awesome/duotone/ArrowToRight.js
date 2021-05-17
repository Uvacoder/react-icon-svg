import * as React from "react";

function SvgArrowToRight(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 88v336a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24V88a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M158.52 120.13l17-17.06a23.86 23.86 0 0133.91 0L345 239a24 24 0 010 34L209.43 408.93a23.86 23.86 0 01-33.91 0l-17-17.06a24 24 0 010-34l65.61-65.81H24A24 24 0 010 268v-24.09a24 24 0 0124-24.07h200.13L158.52 154a23.9 23.9 0 010-33.87z"
        className="arrow-to-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowToRight;
