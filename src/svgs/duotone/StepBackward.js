import * as React from "react";

function SvgStepBackward(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M144 292.71V464a16 16 0 01-16 16H80a16 16 0 01-16-16V48a16 16 0 0116-16h48a16 16 0 0116 16v244.7z"
        opacity={0.4}
      />
      <path
        d="M384 64v384c0 27.4-31.9 41.7-52.5 24.6L144 298.34v-84.69L331.5 39.41C352.1 22.31 384 36.61 384 64z"
        className="step-backward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStepBackward;
