import * as React from "react";

function SvgChevronSquareUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-23.52 287.51l-17 17a24 24 0 01-33.94 0L224 234.91 122.43 336.48a24 24 0 01-33.94 0l-17-17a24 24 0 010-33.94L207 150.06a24 24 0 0133.94 0l135.54 135.51a24 24 0 010 33.94z"
        opacity={0.4}
      />
      <path
        d="M71.52 285.57L207 150.06a24 24 0 0133.94 0l135.54 135.51a24 24 0 010 33.94l-17 17a24 24 0 01-33.94 0L224 234.91 122.43 336.48a24 24 0 01-33.94 0l-17-17a24 24 0 01.03-33.91z"
        className="chevron-square-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronSquareUp;
