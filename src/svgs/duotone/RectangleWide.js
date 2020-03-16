import * as React from "react";

function SvgRectangleWide(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M592 96H48a48 48 0 00-48 48v224a48 48 0 0048 48h544a48 48 0 0048-48V144a48 48 0 00-48-48zm-16 240a16 16 0 01-16 16H80a16 16 0 01-16-16V176a16 16 0 0116-16h480a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M64 336V176a16 16 0 0116-16h480a16 16 0 0116 16v160a16 16 0 01-16 16H80a16 16 0 01-16-16z"
        className="rectangle-wide_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRectangleWide;
