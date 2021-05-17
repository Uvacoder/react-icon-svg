import * as React from "react";

function SvgCameraRetro(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 232a88 88 0 1088 88 88 88 0 00-88-88zm0 56a32.09 32.09 0 00-32 32 16 16 0 01-32 0 64.06 64.06 0 0164-64 16 16 0 010 32zM480 32H256l-64 48H16A16 16 0 000 96v64h512V64a32.09 32.09 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M176 48a16 16 0 00-16-16H64a16 16 0 00-16 16v32h128zM0 160v272a48 48 0 0048 48h416a48 48 0 0048-48V160zm256 280a120 120 0 11120-120 120 120 0 01-120 120z"
        className="camera-retro_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCameraRetro;
