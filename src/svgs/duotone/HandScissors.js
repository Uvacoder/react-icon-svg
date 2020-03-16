import * as React from "react";

function SvgHandScissors(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 168v240a40 40 0 01-30.84 38.94l-136 32A40.36 40.36 0 01336 480h-80a40 40 0 010-80v-8h-32a40 40 0 010-80h32v-8H48a48 48 0 010-96h208v-13.57L78.45 124.69a48 48 0 1135.1-89.35l190.34 74.76L328.77 79a40 40 0 0151.08-9.74l112 64A40 40 0 01512 168z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgHandScissors;
