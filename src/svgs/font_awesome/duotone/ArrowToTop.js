import * as React from "react";

function SvgArrowToTop(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M24 32h336a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24H24A23.94 23.94 0 010 72V56a23.94 23.94 0 0124-24z"
        opacity={0.4}
      />
      <path
        d="M56.13 321.48l-17.06-17a23.86 23.86 0 010-33.91L175 135.05a24 24 0 0134 0l135.93 135.52a23.86 23.86 0 010 33.91l-17.06 17a24 24 0 01-34 0l-65.81-65.61V456A24 24 0 01204 480h-24.09a24 24 0 01-24.07-24V255.87L90 321.48a23.9 23.9 0 01-33.87 0z"
        className="arrow-to-top_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowToTop;
