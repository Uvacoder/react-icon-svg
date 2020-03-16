import * as React from "react";

function SvgCut(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M96 224a96.49 96.49 0 0013.36-.93L142.29 256l67.88-67.88-24.85-24.86A96 96 0 1096 224zm0-128a32 32 0 11-32 32 32 32 0 0132-32zm348.48 326.43a12 12 0 010 17 84 84 0 01-118.79 0L210.17 323.88 278.06 256z"
        opacity={0.4}
      />
      <path
        d="M444.48 89.57a12 12 0 000-17 84 84 0 00-118.79 0L109.36 288.93a95.9 95.9 0 1076 59.81zM96 416a32 32 0 1132-32 32 32 0 01-32 32z"
        className="cut_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCut;
