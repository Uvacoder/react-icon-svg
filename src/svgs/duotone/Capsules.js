import * as React from "react";

function SvgCapsules(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M112 32A112 112 0 000 144v112h224V144A112 112 0 00112 32zm312.2 80.8a114.33 114.33 0 00-159.3-28.1c-3.12 2.18-6.07 4.51-8.9 6.94v179.67l47 67.1 187.38-131.06z"
        opacity={0.4}
      />
      <path
        d="M0 368a112 112 0 00224 0V256H0zm555.3-67.9l-64.92-92.75L303 338.41l65 92.79a114.31 114.31 0 10187.3-131.1z"
        className="capsules_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCapsules;
