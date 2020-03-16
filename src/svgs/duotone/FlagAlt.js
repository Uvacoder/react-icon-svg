import * as React from "react";

function SvgFlagAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 30.83v301.29a31.39 31.39 0 01-18.5 28.8C317.7 437.33 281.7 291.83 96 384V32.42c209.4-94.59 195.3 59.1 366.6-28.19 22.6-11.5 49.4 1.5 49.4 26.6z"
        opacity={0.4}
      />
      <path
        d="M64 32v464a16 16 0 01-16 16H16a16 16 0 01-16-16V32a32 32 0 0164 0z"
        className="flag-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlagAlt;
