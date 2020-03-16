import * as React from "react";

function SvgIceCream(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M367.94 256.19H80.06a48 48 0 01-4.16-95.92c1.39-.06 2.77-.06 4.16 0H81a143.94 143.94 0 11286 0h.94a48 48 0 014.16 95.92c-1.39.06-2.77.06-4.16 0z"
        opacity={0.4}
      />
      <path
        d="M195.39 493.69L96.05 288.17H352l-99.39 205.52a31.52 31.52 0 01-57.22 0z"
        className="ice-cream_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgIceCream;
