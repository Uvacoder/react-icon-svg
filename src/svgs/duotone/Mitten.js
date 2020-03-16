import * as React from "react";

function SvgMitten(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M368 416a16 16 0 0116 16v64a16 16 0 01-16 16H48a16 16 0 01-16-16v-64a16 16 0 0116-16z"
        opacity={0.4}
      />
      <path
        d="M433.12 297l-72.5 87h-309L3.72 176.42a144 144 0 01107.9-172.7c77.4-17.9 154.8 30.5 172.8 108L314 240.12l20.9-25a63.94 63.94 0 1198.2 81.9z"
        className="mitten_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMitten;
