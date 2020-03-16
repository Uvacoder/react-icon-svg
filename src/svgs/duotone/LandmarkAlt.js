import * as React from "react";

function SvgLandmarkAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 496v-32a16 16 0 0116-16h16v-16a16 16 0 0116-16h16V288h64v128h96V288h64v128h96V288h64v128h16a16 16 0 0116 16v16h16a16 16 0 0116 16v32a16 16 0 01-16 16H16a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M288 16v18.9A191.88 191.88 0 01445.1 192H464a16 16 0 0116 16v32a16 16 0 01-16 16H48a16 16 0 01-16-16v-32a16 16 0 0116-16h18.9A191.88 191.88 0 01224 34.9V16a16 16 0 0116-16h32a16 16 0 0116 16z"
        className="landmark-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLandmarkAlt;
