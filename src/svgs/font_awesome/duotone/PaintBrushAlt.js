import * as React from "react";

function SvgPaintBrushAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M490.92 133L272.11 354.51l-78-65L366 33.1c62-88.4 198.15 19.42 124.92 99.9z"
        opacity={0.4}
      />
      <path
        d="M167.87 309.29l87.07 72.56a86.87 86.87 0 011.06 10C256 468.23 203.86 512 128 512 37.93 512 0 439.62 0 357.27c9.79 6.68 44.14 34.35 55.25 34.35a15.26 15.26 0 0014.59-10c20.8-54.8 57.58-69.92 98.03-72.33z"
        className="paint-brush-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPaintBrushAlt;
