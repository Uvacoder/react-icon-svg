import * as React from "react";

function SvgInfoCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 110a42 42 0 11-42 42 42 42 0 0142-42zm56 254a12 12 0 01-12 12h-88a12 12 0 01-12-12v-24a12 12 0 0112-12h12v-64h-12a12 12 0 01-12-12v-24a12 12 0 0112-12h64a12 12 0 0112 12v100h12a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M256 202a42 42 0 10-42-42 42 42 0 0042 42zm44 134h-12V236a12 12 0 00-12-12h-64a12 12 0 00-12 12v24a12 12 0 0012 12h12v64h-12a12 12 0 00-12 12v24a12 12 0 0012 12h88a12 12 0 0012-12v-24a12 12 0 00-12-12z"
        className="info-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgInfoCircle;
