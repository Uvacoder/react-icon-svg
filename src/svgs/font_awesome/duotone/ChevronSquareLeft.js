import * as React from "react";

function SvgChevronSquareLeft(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-95.51 325.57a24 24 0 010 33.95l-17 17a24 24 0 01-33.95 0L118.06 273a24 24 0 010-33.94l135.51-135.54a24 24 0 0133.95 0l17 17a24 24 0 010 33.94L202.91 256z"
        opacity={0.4}
      />
      <path
        d="M118.06 239l135.51-135.48a24 24 0 0133.95 0l17 17a24 24 0 010 33.94L202.91 256l101.58 101.57a24 24 0 010 33.95l-17 17a24 24 0 01-33.95 0L118.06 273a24 24 0 010-34z"
        className="chevron-square-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronSquareLeft;
