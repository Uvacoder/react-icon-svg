import * as React from "react";

function SvgStickyNote(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 352H336a16 16 0 00-16 16v112H24a23.94 23.94 0 01-24-23.88V56a23.94 23.94 0 0123.88-24H424a23.94 23.94 0 0124 23.88V352z"
        opacity={0.4}
      />
      <path
        d="M320 480V368a16 16 0 0116-16h112v6.1a23.9 23.9 0 01-7 16.9l-98 98a24 24 0 01-17 7z"
        className="sticky-note_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStickyNote;
