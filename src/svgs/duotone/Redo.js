import * as React from "react";

function SvgRedo(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M422.36 422.69a12 12 0 010 17l-.49.46A247.1 247.1 0 01255.67 504c-136.9 0-247.9-110.93-248-247.81C7.57 119.53 119 8 255.67 8a247.45 247.45 0 01188.9 87.33l3.52 64.43-46.5-2.22A176 176 0 10372 388.15a12 12 0 0116.38.54z"
        opacity={0.4}
      />
      <path
        d="M512 12v200a12 12 0 01-12 12H300a12 12 0 01-12-12v-47.32a12 12 0 0112-12h.58l147.54 7.06-7.44-147.19A12 12 0 01452.07 0H500a12 12 0 0112 12z"
        className="redo_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRedo;
