import * as React from "react";

function SvgChevronDoubleUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M435 420.86a24 24 0 010 33.94l-22.63 22.67a23.93 23.93 0 01-33.85 0L224 323.5l-154.5 154a23.93 23.93 0 01-33.85 0L13 454.8a24 24 0 010-33.94l194-194.33a23.93 23.93 0 0133.88 0z"
        opacity={0.4}
      />
      <path
        d="M435 228.86a24 24 0 010 33.94l-22.63 22.67a23.93 23.93 0 01-33.85 0L224 131.5l-154.5 154a23.93 23.93 0 01-33.85 0L13 262.8a24 24 0 010-33.94L207 34.53a23.93 23.93 0 0133.88 0z"
        className="chevron-double-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronDoubleUp;
