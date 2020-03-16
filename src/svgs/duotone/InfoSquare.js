import * as React from "react";

function SvgInfoSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-176 86a42 42 0 11-42 42 42 42 0 0142-42zm56 254a12 12 0 01-12 12h-88a12 12 0 01-12-12v-24a12 12 0 0112-12h12v-64h-12a12 12 0 01-12-12v-24a12 12 0 0112-12h64a12 12 0 0112 12v100h12a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M224 202a42 42 0 10-42-42 42 42 0 0042 42zm44 134h-12V236a12 12 0 00-12-12h-64a12 12 0 00-12 12v24a12 12 0 0012 12h12v64h-12a12 12 0 00-12 12v24a12 12 0 0012 12h88a12 12 0 0012-12v-24a12 12 0 00-12-12z"
        className="info-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgInfoSquare;
