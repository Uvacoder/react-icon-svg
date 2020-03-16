import * as React from "react";

function SvgMehRollingEyes(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 224a64 64 0 1164 64 64 64 0 01-64-64zm224 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-112a64 64 0 1164-64 64 64 0 01-64 64z"
        opacity={0.4}
      />
      <path
        d="M375 168a64 64 0 00-62 0 32 32 0 1062 0zm-223-8a63.66 63.66 0 00-31 8 32 32 0 1062 0 63.66 63.66 0 00-31-8z"
        className="meh-rolling-eyes_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMehRollingEyes;
