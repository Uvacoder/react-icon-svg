import * as React from "react";

function SvgMonument(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h352a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M289.14 100.74a32 32 0 00-9.21-19.44L203.31 4.69a16 16 0 00-22.63 0l-76.6 76.61a32 32 0 00-9.21 19.44L64 416h256zM240 307.2c0 6.4-6.4 12.8-12.8 12.8h-70.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h70.4c6.4 0 12.8 6.4 12.8 12.8z"
        className="monument_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMonument;
