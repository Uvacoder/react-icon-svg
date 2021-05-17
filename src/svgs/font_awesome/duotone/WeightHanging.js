import * as React from "react";

function SvgWeightHanging(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M164.47 128a96 96 0 11181.06 0H255a32 32 0 10-32-32 32 32 0 0032 32z"
        opacity={0.4}
      />
      <path
        d="M510.28 445.85l-73-292.13c-3.8-15.19-16.44-25.72-30.87-25.72H105.64c-14.43 0-27.08 10.54-30.87 25.72l-73 292.13C-6.61 479.16 16.38 512 48 512h416c31.62 0 54.61-32.84 46.28-66.15z"
        className="weight-hanging_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWeightHanging;
