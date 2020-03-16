import * as React from "react";

function SvgBackward(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 96v320c0 27.39-31.9 41.79-52.51 24.59L288 297.69v-83.38L459.49 71.45C480.1 54.25 512 68.65 512 96z"
        opacity={0.4}
      />
      <path
        d="M11.48 231.41l192-160C224.1 54.25 256 68.65 256 96v320c0 27.39-31.9 41.79-52.51 24.59l-192-160a32.07 32.07 0 01-.01-49.18z"
        className="backward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBackward;
