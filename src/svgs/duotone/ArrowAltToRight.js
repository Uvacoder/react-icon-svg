import * as React from "react";

function SvgArrowAltToRight(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 88v336a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24V88a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M0 296.11V216a24 24 0 0124-24h136v-88c0-17.82 21.51-26.73 34.11-14.12l152.26 152.45a19.4 19.4 0 010 27.34L194.14 422.09C181.54 434.7 160 425.79 160 408v-87.86H24a24 24 0 01-24-24.03z"
        className="arrow-alt-to-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowAltToRight;
