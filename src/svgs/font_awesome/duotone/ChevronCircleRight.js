import * as React from "react";

function SvgChevronCircleRight(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm113.9 265L234.4 408.5a23.9 23.9 0 01-33.9 0l-17-17a23.9 23.9 0 010-33.9L285.1 256 183.5 154.4a23.9 23.9 0 010-33.9l17-17a23.9 23.9 0 0133.9 0L369.9 239a24 24 0 010 34z"
        opacity={0.4}
      />
      <path
        d="M369.9 273L234.4 408.5a23.9 23.9 0 01-33.9 0l-17-17a23.9 23.9 0 010-33.9L285.1 256 183.5 154.4a23.9 23.9 0 010-33.9l17-17a23.9 23.9 0 0133.9 0L369.9 239a24 24 0 010 34z"
        className="chevron-circle-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronCircleRight;
