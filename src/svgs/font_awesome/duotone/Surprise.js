import * as React from "react";

function SvgSurprise(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208a32 32 0 1132 32 32 32 0 01-32-32zm112 208a64 64 0 1164-64 64 64 0 01-64 64zm80-176a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M328 176a32 32 0 1032 32 32 32 0 00-32-32zm-160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="surprise_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSurprise;
