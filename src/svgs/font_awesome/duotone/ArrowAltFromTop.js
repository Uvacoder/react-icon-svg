import * as React from "react";

function SvgArrowAltFromTop(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 56v16a23.94 23.94 0 01-24 24H24A23.94 23.94 0 010 72V56a23.94 23.94 0 0124-24h336a23.94 23.94 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M151.89 128H232a24 24 0 0124 24v136h88c17.82 0 26.73 21.51 14.12 34.11L205.67 474.37a19.4 19.4 0 01-27.34 0L25.91 322.14C13.3 309.54 22.21 288 40 288h87.83V152a24 24 0 0124.06-24z"
        className="arrow-alt-from-top_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowAltFromTop;
