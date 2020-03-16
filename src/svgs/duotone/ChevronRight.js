import * as React from "react";

function SvgChevronRight(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M188.74 256l56.78 56.89L91.21 466.9a24 24 0 01-33.94 0l-22.7-22.65a23.93 23.93 0 010-33.84z"
        opacity={0.4}
      />
      <path
        d="M91.25 45.06l194.33 194a23.93 23.93 0 010 33.84l-40 40-211-211.34a23.92 23.92 0 010-33.84l22.7-22.65a24 24 0 0133.97-.01z"
        className="chevron-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronRight;
