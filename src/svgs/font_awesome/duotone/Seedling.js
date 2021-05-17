import * as React from "react";

function SvgSeedling(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 32c0 115.9-88 211.1-200.7 222.8a256.38 256.38 0 00-59-107.6C290.6 78.5 363.8 32 448 32z"
        opacity={0.4}
      />
      <path
        d="M288 320v144a16 16 0 01-16 16h-32a16 16 0 01-16-16V320C100.3 320 0 219.7 0 96h64c123.7 0 224 100.3 224 224z"
        className="seedling_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSeedling;
