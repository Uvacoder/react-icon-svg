import * as React from "react";

function SvgHardHat(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 432v-32a16 16 0 0116-16h480a16 16 0 0116 16v32a16 16 0 01-16 16H16a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M320 80v112l40.81-81.62C430.72 139.08 480 207.75 480 288v64H32v-64c0-80.25 49.28-148.92 119.19-177.62L192 192V80a16 16 0 0116-16h96a16 16 0 0116 16z"
        className="hard-hat_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHardHat;
