import * as React from "react";

function SvgMeh(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168a32 32 0 11-32 32 32 32 0 0132-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M328 176a32 32 0 1032 32 32 32 0 00-32-32zm-160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="meh_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMeh;
