import * as React from "react";

function SvgPlane(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M214.86 192h150.85L260.61 8.06A16 16 0 00246.71 0h-65.5a16 16 0 00-15.38 20.39zm-49 299.6a16 16 0 0015.35 20.4h65.5a16 16 0 0013.89-8.06L365.71 320H214.86z"
        opacity={0.4}
      />
      <path
        d="M480 320H112l-43.2 57.6A16 16 0 0156 384H16A16 16 0 01.49 364.12L32 256 .49 147.88A16 16 0 0116 128h40a16 16 0 0112.8 6.4L112 192h368c35.35 0 96 28.65 96 64s-60.65 64-96 64z"
        className="plane_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPlane;
