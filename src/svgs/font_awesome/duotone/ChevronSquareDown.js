import * as React from "react";

function SvgChevronSquareDown(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-23.51 194.43L241 361.94a24 24 0 01-33.94 0L71.52 226.43a24 24 0 010-33.94l17-17a24 24 0 0133.94 0L224 277.09l101.57-101.58a24 24 0 0133.95 0l17 17a24 24 0 01-.03 33.92z"
        opacity={0.4}
      />
      <path
        d="M71.52 192.49l17-17a24 24 0 0133.94 0L224 277.09l101.57-101.58a24 24 0 0133.95 0l17 17a24 24 0 010 34L241 361.94a24 24 0 01-33.94 0L71.52 226.43a24 24 0 010-33.94z"
        className="chevron-square-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronSquareDown;
