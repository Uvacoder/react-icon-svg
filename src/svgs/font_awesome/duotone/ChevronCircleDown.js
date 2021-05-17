import * as React from "react";

function SvgChevronCircleDown(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm152.5 226.4L273 369.9a24 24 0 01-34 0L103.5 234.4a23.9 23.9 0 010-33.9l17-17a23.9 23.9 0 0133.9 0L256 285.1l101.6-101.6a23.9 23.9 0 0133.9 0l17 17a23.9 23.9 0 010 33.9z"
        opacity={0.4}
      />
      <path
        d="M239 369.9L103.5 234.4a23.9 23.9 0 010-33.9l17-17a23.9 23.9 0 0133.9 0L256 285.1l101.6-101.6a23.9 23.9 0 0133.9 0l17 17a23.9 23.9 0 010 33.9L273 369.9a24 24 0 01-34 0z"
        className="chevron-circle-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronCircleDown;
