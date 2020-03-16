import * as React from "react";

function SvgGlassChampagne(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M64.44 221L78 128h100l13.59 93a55.77 55.77 0 01-10.26 39.82c-25.64 35.81-81.15 35.65-106.67 0A55.67 55.67 0 0164.44 221z"
        opacity={0.4}
      />
      <path
        d="M216 464h-56V347.7c60.7-15.2 103.3-72 95-135.4L228 27.4A32.07 32.07 0 00196.33 0H59.73A32.07 32.07 0 0028 27.4L1 212.3c-8.3 63.4 34.3 120.2 95 135.4V464H40a40 40 0 00-40 40 8 8 0 008 8h240a8 8 0 008-8 40 40 0 00-40-40zM74.7 260.82A55.67 55.67 0 0164.44 221L87.37 64h81.33l22.93 157a55.77 55.77 0 01-10.26 39.82c-25.64 35.81-81.15 35.65-106.67 0z"
        className="glass-champagne_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGlassChampagne;
