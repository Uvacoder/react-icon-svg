import * as React from "react";

function SvgBold(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M32 32h32v80H32a16 16 0 01-16-16V48a16 16 0 0116-16zm32 368v80H32a16 16 0 01-16-16v-48a16 16 0 0116-16z"
        opacity={0.4}
      />
      <path
        d="M332.53 237.78c12.86-15.8 24.9-44.81 26.93-65C366.85 96.48 306.81 32 232 32H64v448h183.62C322.94 480 384 419.11 384 344a135.36 135.36 0 00-51.47-106.22zM144 112h88a48 48 0 110 96h-88zm88 288h-88V288h88a56 56 0 110 112z"
        className="bold_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBold;
