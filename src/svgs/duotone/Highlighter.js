import * as React from "react";

function SvgHighlighter(props) {
  return (
    <svg viewBox="0 0 544 512" {...props}>
      <path
        d="M0 480l99.92 32 35.45-35.45-67-67zM527.92 79.27l-63.2-63.2a54.89 54.89 0 00-75.12-2.35l-199 170 169.72 169.74 170-199.06a54.88 54.88 0 00-2.4-75.13z"
        opacity={0.4}
      />
      <path
        d="M75.94 371.84l50.93-50.94-13.05-42.83A36.6 36.6 0 01124.61 240l41.52-35.44 173.34 173.31-35.55 41.64a36.59 36.59 0 01-38.15 10.78L223 417.21l-50.86 50.86z"
        className="highlighter_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHighlighter;
