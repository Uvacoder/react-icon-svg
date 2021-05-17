import * as React from "react";

function SvgMouseAlt(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M224 0h-64A160 160 0 000 160v192a160 160 0 00160 160h64a160 160 0 00160-160V160A160 160 0 00224 0zm0 160a32 32 0 01-64 0v-32a32 32 0 0164 0z"
        opacity={0.4}
      />
      <path
        d="M224 160a32 32 0 01-64 0v-32a32 32 0 0164 0z"
        className="mouse-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMouseAlt;
