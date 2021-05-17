import * as React from "react";

function SvgRectangleLandscape(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48zm-16 304a16 16 0 01-16 16H80a16 16 0 01-16-16V144a16 16 0 0116-16h352a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M64 368V144a16 16 0 0116-16h352a16 16 0 0116 16v224a16 16 0 01-16 16H80a16 16 0 01-16-16z"
        className="rectangle-landscape_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRectangleLandscape;
