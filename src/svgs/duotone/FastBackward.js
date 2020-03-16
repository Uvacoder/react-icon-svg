import * as React from "react";

function SvgFastBackward(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64 285.31V436a12 12 0 01-12 12H12a12 12 0 01-12-12V76a12 12 0 0112-12h40a12 12 0 0112 12v209.3z"
        opacity={0.4}
      />
      <path
        d="M512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.31V416c0 27.4-31.9 41.7-52.5 24.6L96 314.28V198.71l139.5-127.3C256.1 54.31 288 68.61 288 96v131.9L459.5 71.41C480.1 54.31 512 68.61 512 96z"
        className="fast-backward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFastBackward;
