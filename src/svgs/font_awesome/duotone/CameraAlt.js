import * as React from "react";

function SvgCameraAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 200a88 88 0 1088 88 88.13 88.13 0 00-88-88zm0 56a32.09 32.09 0 00-32 32 16 16 0 01-32 0 64.06 64.06 0 0164-64 16 16 0 010 32z"
        opacity={0.4}
      />
      <path
        d="M464 96h-88l-12.4-32.9A47.93 47.93 0 00318.7 32H193.2a47.93 47.93 0 00-44.9 31.1L136 96H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V144a48 48 0 00-48-48zM256 408a120 120 0 11120-120 120.1 120.1 0 01-120 120z"
        className="camera-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCameraAlt;
