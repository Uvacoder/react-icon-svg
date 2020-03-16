import * as React from "react";

function SvgScrewdriver(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 0l64 64-96 128h-62.07l-83 83A98.45 98.45 0 00237 241.09l83-83V96z"
        opacity={0.4}
      />
      <path
        d="M63.61 501.08l-52.7-52.7a37.28 37.28 0 010-52.71L128 278.59A74.54 74.54 0 01233.4 384L116.32 501.08a37.26 37.26 0 01-52.71 0z"
        className="screwdriver_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScrewdriver;
