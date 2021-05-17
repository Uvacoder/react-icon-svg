import * as React from "react";

function SvgTruckRamp(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path d="M544 320a96 96 0 1096 96 96 96 0 00-96-96z" opacity={0.4} />
      <path
        d="M384 0a32 32 0 00-32 32v323.6L5.9 450a8 8 0 00-5.6 9.8l12.6 46.3a8 8 0 009.8 5.6l393.7-107.4c0 .33 0 .66.05 1C421.91 339.7 477 288 544 288a127.71 127.71 0 0196 43.44V0z"
        className="truck-ramp_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTruckRamp;
