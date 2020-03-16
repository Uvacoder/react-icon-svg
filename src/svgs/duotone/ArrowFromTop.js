import * as React from "react";

function SvgArrowFromTop(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M24 32h336a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24H24A23.94 23.94 0 010 72V56a23.94 23.94 0 0124-24z"
        opacity={0.4}
      />
      <path
        d="M327.87 286.52l17.06 17a23.86 23.86 0 010 33.91L209 473a24 24 0 01-34 0L39.07 337.43a23.86 23.86 0 010-33.91l17.06-17a24 24 0 0134 0l65.81 65.61V152A24 24 0 01180 128h24.08a24 24 0 0124.07 24v200.13L294 286.52a23.9 23.9 0 0133.87 0z"
        className="arrow-from-top_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowFromTop;
