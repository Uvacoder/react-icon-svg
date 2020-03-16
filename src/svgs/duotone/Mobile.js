import * as React from "react";

function SvgMobile(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M0 384v80a48 48 0 0048 48h224a48 48 0 0048-48v-80zm160 96a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M0 384V48A48 48 0 0148 0h224a48 48 0 0148 48v336z"
        className="mobile_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMobile;
