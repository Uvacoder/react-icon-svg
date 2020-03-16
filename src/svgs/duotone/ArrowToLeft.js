import * as React from "react";

function SvgArrowToLeft(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M0 424V88a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v336a23.94 23.94 0 01-24 24H24a23.94 23.94 0 01-24-24z"
        opacity={0.4}
      />
      <path
        d="M289.48 391.87l-17 17.06a23.86 23.86 0 01-33.91 0L103.05 273a24 24 0 010-34l135.52-135.93a23.86 23.86 0 0133.91 0l17 17.06a24 24 0 010 34l-65.61 65.81H424A24 24 0 01448 244v24.08a24 24 0 01-24 24.07H223.87L289.48 358a23.9 23.9 0 010 33.87z"
        className="arrow-to-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowToLeft;
