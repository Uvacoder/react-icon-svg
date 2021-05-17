import * as React from "react";

function SvgTablet(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M0 384v80a48 48 0 0048 48h352a48 48 0 0048-48v-80zm224 96a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M0 384V48A48 48 0 0148 0h352a48 48 0 0148 48v336z"
        className="tablet_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTablet;
