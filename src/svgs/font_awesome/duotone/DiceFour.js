import * as React from "react";

function SvgDiceFour(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM128 384a32 32 0 1132-32 32 32 0 01-32 32zm0-192a32 32 0 1132-32 32 32 0 01-32 32zm192 192a32 32 0 1132-32 32 32 0 01-32 32zm0-192a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M128 320a32 32 0 1032 32 32 32 0 00-32-32zm0-192a32 32 0 1032 32 32 32 0 00-32-32zm192 192a32 32 0 1032 32 32 32 0 00-32-32zm0-128a32 32 0 10-32-32 32 32 0 0032 32z"
        className="dice-four_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDiceFour;
