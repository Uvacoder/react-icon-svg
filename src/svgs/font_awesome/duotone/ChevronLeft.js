import * as React from "react";

function SvgChevronLeft(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M285.59 410.4a23.93 23.93 0 010 33.84l-22.7 22.65a24 24 0 01-33.94 0l-154.31-154L131.42 256z"
        opacity={0.4}
      />
      <path
        d="M262.85 45.06l22.7 22.65a23.93 23.93 0 010 33.84L74.58 312.9l-40-40a23.94 23.94 0 010-33.84l194.33-194a24 24 0 0133.94 0z"
        className="chevron-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronLeft;
