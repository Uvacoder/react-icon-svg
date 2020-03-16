import * as React from "react";

function SvgChevronDown(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M224.1 284.64l-56.89 56.78-154-154.31a24 24 0 010-33.94l22.65-22.7a23.93 23.93 0 0133.84 0z"
        opacity={0.4}
      />
      <path
        d="M435 187.15L241 381.48a23.94 23.94 0 01-33.84 0l-40-40 211.34-211a23.93 23.93 0 0133.84 0L435 153.21a24 24 0 010 33.94z"
        className="chevron-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronDown;
