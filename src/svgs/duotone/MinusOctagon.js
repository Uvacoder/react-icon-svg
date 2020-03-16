import * as React from "react";

function SvgMinusOctagon(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M497.9 150.5L361.4 14.1A48 48 0 00327.5 0H184.4a48 48 0 00-33.9 14.1L14.1 150.6A48 48 0 000 184.5v143.1a48 48 0 0014.1 33.9l136.5 136.4a48 48 0 0033.9 14.1h143.1a48 48 0 0033.9-14.1l136.4-136.5a48 48 0 0014.1-33.9V184.4a48 48 0 00-14.1-33.9zM400 284a12 12 0 01-12 12H124a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M400 228v56a12 12 0 01-12 12H124a12 12 0 01-12-12v-56a12 12 0 0112-12h264a12 12 0 0112 12z"
        className="minus-octagon_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMinusOctagon;
