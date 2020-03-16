import * as React from "react";

function SvgMinusHexagon(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M553.48 231.8l-112-192A48.11 48.11 0 00400 16H176a48.11 48.11 0 00-41.5 23.8l-112 192a48.19 48.19 0 000 48.4l112 192A48.11 48.11 0 00176 496h224a48.11 48.11 0 0041.5-23.8l112-192a48.12 48.12 0 000-48.4zM432 284a12 12 0 01-12 12H156a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M432 228v56a12 12 0 01-12 12H156a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        className="minus-hexagon_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMinusHexagon;
