import * as React from "react";

function SvgRectanglePortrait(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 432a16 16 0 01-16 16H80a16 16 0 01-16-16V80a16 16 0 0116-16h224a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M64 432V80a16 16 0 0116-16h224a16 16 0 0116 16v352a16 16 0 01-16 16H80a16 16 0 01-16-16z"
        className="rectangle-portrait_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRectanglePortrait;
