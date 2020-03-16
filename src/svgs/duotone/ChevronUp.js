import * as React from "react";

function SvgChevronUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M69.66 381.49a23.93 23.93 0 01-33.84 0l-22.65-22.7a24 24 0 010-33.94l154.04-154.31 56.89 56.78z"
        opacity={0.4}
      />
      <path
        d="M435 358.75l-22.65 22.7a23.92 23.92 0 01-33.84 0l-211.34-211 40-40a23.93 23.93 0 0133.84 0L435 324.81a24 24 0 010 33.94z"
        className="chevron-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronUp;
