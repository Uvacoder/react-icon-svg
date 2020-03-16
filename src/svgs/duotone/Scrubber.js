import * as React from "react";

function SvgScrubber(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 312a64 64 0 1164-64 64 64 0 01-64 64z"
        opacity={0.4}
      />
      <path
        d="M248 320a64 64 0 1164-64 64 64 0 01-64 64z"
        className="scrubber_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScrubber;
