import * as React from "react";

function SvgVrCardboard(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M608 64H32A32 32 0 000 96v320a32 32 0 0032 32h160.22a64 64 0 0058.36-37.74l27.74-61.64c7.89-17.54 24-28.62 41.68-28.62s33.79 11.08 41.68 28.62l27.74 61.64A64 64 0 00447.78 448H608a32 32 0 0032-32V96a32 32 0 00-32-32zM160 304a64 64 0 1164-64 64 64 0 01-64 64zm320 0a64 64 0 1164-64 64 64 0 01-64 64z"
        opacity={0.4}
      />
      <path
        d="M160 176a64 64 0 1064 64 64 64 0 00-64-64zm320 0a64 64 0 1064 64 64 64 0 00-64-64z"
        className="vr-cardboard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVrCardboard;
