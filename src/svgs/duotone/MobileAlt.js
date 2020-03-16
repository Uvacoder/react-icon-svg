import * as React from "react";

function SvgMobileAlt(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M272 0H48A48 48 0 000 48v416a48 48 0 0048 48h224a48 48 0 0048-48V48a48 48 0 00-48-48zM160 480a32 32 0 1132-32 32 32 0 01-32 32zm112-108a12 12 0 01-12 12H60a12 12 0 01-12-12V60a12 12 0 0112-12h200a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M272 372a12 12 0 01-12 12H60a12 12 0 01-12-12V60a12 12 0 0112-12h200a12 12 0 0112 12z"
        className="mobile-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMobileAlt;
