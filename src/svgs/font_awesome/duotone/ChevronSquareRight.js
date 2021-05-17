import * as React from "react";

function SvgChevronSquareRight(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-70.06 241L194.43 408.48a24 24 0 01-33.94 0l-17-17a24 24 0 010-33.94L245.09 256 143.52 154.43a24 24 0 010-33.94l17-17a24 24 0 0133.94 0L329.94 239a24 24 0 010 34z"
        opacity={0.4}
      />
      <path
        d="M143.52 154.43a24 24 0 010-33.94l17-17a24 24 0 0133.94 0L329.94 239a24 24 0 010 33.94L194.43 408.48a24 24 0 01-33.94 0l-17-17a24 24 0 010-33.94L245.09 256z"
        className="chevron-square-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronSquareRight;
