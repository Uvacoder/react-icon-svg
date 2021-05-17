import * as React from "react";

function SvgMapPin(props) {
  return (
    <svg viewBox="0 0 288 512" {...props}>
      <path
        d="M144 320a175.77 175.77 0 0032-3.06v156.69l-22 33a12 12 0 01-20 0l-22-33V316.94a175.77 175.77 0 0032 3.06z"
        opacity={0.4}
      />
      <path
        d="M144 0a144 144 0 10144 144A144 144 0 00144 0zm0 76a68.07 68.07 0 00-68 68 12 12 0 01-24 0 92.11 92.11 0 0192-92 12 12 0 010 24z"
        className="map-pin_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapPin;
