import * as React from "react";

function SvgFlashlight(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M400.13 149.25L384 160H32a32 32 0 00-32 32v128a32 32 0 0032 32h352l16.13 10.75A317 317 0 00576 416V96a317 317 0 00-175.87 53.25zM288 288h-32a32 32 0 010-64h32a32 32 0 010 64z"
        opacity={0.4}
      />
      <path
        d="M608 96h-32v320h32a32 32 0 0032-32V128a32 32 0 00-32-32zM288 224h-32a32 32 0 000 64h32a32 32 0 000-64z"
        className="flashlight_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlashlight;
