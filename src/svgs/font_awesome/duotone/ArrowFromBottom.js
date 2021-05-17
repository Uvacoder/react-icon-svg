import * as React from "react";

function SvgArrowFromBottom(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M360 480H24a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h336a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M56.13 225.48l-17.06-17a23.86 23.86 0 010-33.91L175 39.05a24 24 0 0134 0l135.93 135.52a23.86 23.86 0 010 33.91l-17.06 17a24 24 0 01-34 0l-65.81-65.61V360A24 24 0 01204 384h-24.09a24 24 0 01-24.07-24V159.87L90 225.48a23.9 23.9 0 01-33.87 0z"
        className="arrow-from-bottom_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowFromBottom;
