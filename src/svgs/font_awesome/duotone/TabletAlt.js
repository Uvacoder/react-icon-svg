import * as React from "react";

function SvgTabletAlt(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 0H48A48 48 0 000 48v416a48 48 0 0048 48h352a48 48 0 0048-48V48a48 48 0 00-48-48zM224 480a32 32 0 1132-32 32 32 0 01-32 32zm176-108a12 12 0 01-12 12H60a12 12 0 01-12-12V60a12 12 0 0112-12h328a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M48 60a12 12 0 0112-12h328a12 12 0 0112 12v312a12 12 0 01-12 12H60a12 12 0 01-12-12z"
        className="tablet-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTabletAlt;
