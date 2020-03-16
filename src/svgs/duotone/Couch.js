import * as React from "react";

function SvgCouch(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M96 160H64a96 96 0 0196-96h320a96 96 0 0196 96h-32a64.06 64.06 0 00-64 64v64H160v-64a64.06 64.06 0 00-64-64z"
        opacity={0.4}
      />
      <path
        d="M640 256a63.84 63.84 0 01-32 55.1V432a16 16 0 01-16 16h-64a16 16 0 01-16-16v-16H128v16a16 16 0 01-16 16H48a16 16 0 01-16-16V311.1A63.79 63.79 0 0164 192h32a32 32 0 0132 32v96h384v-96a32 32 0 0132-32h32a64.06 64.06 0 0164 64z"
        className="couch_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCouch;
