import * as React from "react";

function SvgWand(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M128 272v36.87L186.6 256H144a16 16 0 00-16 16zm248.35-80H400a16 16 0 0016-16v-28z"
        opacity={0.4}
      />
      <path
        d="M507.87 46.18L97.16 501.44A32 32 0 0152 503.71q-.6-.54-1.17-1.11L9.37 461.17a32 32 0 010-45.25c.38-.38.77-.75 1.16-1.11L465.79 4.11a16 16 0 0122 .55l19.48 19.47a16 16 0 01.6 22.05z"
        className="wand_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWand;
