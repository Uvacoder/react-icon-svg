import * as React from "react";

function SvgSmile(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168a32 32 0 11-32 32 32 32 0 0132-32zm-160 0a32 32 0 11-32 32 32 32 0 0132-32zm194.8 170.2a149.38 149.38 0 01-229.6 0c-13.6-16.3 11-36.7 24.6-20.5a117.5 117.5 0 00180.4 0c13.4-16.2 38.1 4.2 24.6 20.5z"
        opacity={0.4}
      />
      <path
        d="M328 176a32 32 0 1032 32 32 32 0 00-32-32zm-160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="smile_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSmile;
