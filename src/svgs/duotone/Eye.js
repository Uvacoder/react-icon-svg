import * as React from "react";

function SvgEye(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 000 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 000-29.19zM288.14 400H288a143.93 143.93 0 11.14 0z"
        opacity={0.4}
      />
      <path
        d="M380.66 280.87a95.78 95.78 0 11-184.87-50.18 47.85 47.85 0 0066.9-66.9 95.3 95.3 0 01118 117.08z"
        className="eye_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEye;
