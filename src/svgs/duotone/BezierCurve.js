import * as React from "react";

function SvgBezierCurve(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M368 32h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32V64a32 32 0 00-32-32zM160 320H64a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32zm416 0h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M208 88h-84.75a64 64 0 100 48H203A232.21 232.21 0 0093.44 288h49.4a183.69 183.69 0 0171-101.56A63.28 63.28 0 01208 160zm368-40a63.93 63.93 0 00-59.25 40H432v72a63.43 63.43 0 01-5.88 26.44 183.69 183.69 0 0171 101.56h49.4A232.21 232.21 0 00437 136h79.73A64 64 0 10576 48z"
        className="bezier-curve_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBezierCurve;
