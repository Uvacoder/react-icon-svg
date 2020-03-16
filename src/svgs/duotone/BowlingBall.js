import * as React from "react";

function SvgBowlingBall(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M232 240a32 32 0 1132-32 32 32 0 01-32 32zM216 64a32 32 0 1032 32 32 32 0 00-32-32zm-96 128a32 32 0 10-32-32 32 32 0 0032 32z"
        opacity={0.4}
      />
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM120 192a32 32 0 1132-32 32 32 0 01-32 32zm64-96a32 32 0 1132 32 32 32 0 01-32-32zm48 144a32 32 0 1132-32 32 32 0 01-32 32z"
        className="bowling-ball_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBowlingBall;
