import * as React from "react";

function SvgFrown(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168a32 32 0 11-32 32 32 32 0 0132-32zm-160 0a32 32 0 11-32 32 32 32 0 0132-32zm170.2 218.2a117.5 117.5 0 00-180.4 0c-13.5 16.3-38.1-4.2-24.6-20.5a149.34 149.34 0 01229.5.1c13.6 16.2-11 36.7-24.5 20.4z"
        opacity={0.4}
      />
      <path
        d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="frown_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFrown;
