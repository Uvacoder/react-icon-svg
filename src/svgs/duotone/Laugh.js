import * as React from "react";

function SvgLaugh(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 152a32 32 0 11-32 32 32 32 0 0132-32zm-160 0a32 32 0 11-32 32 32 32 0 0132-32zm230.9 146A144.12 144.12 0 01256 432h-16A144.12 144.12 0 0197.1 306a16.06 16.06 0 0114-17.88 15 15 0 011.9-.12h270a16 16 0 0116 16 16.64 16.64 0 01-.1 2z"
        opacity={0.4}
      />
      <path
        d="M328 160a32 32 0 1032 32 32 32 0 00-32-32zm-160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="laugh_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLaugh;
