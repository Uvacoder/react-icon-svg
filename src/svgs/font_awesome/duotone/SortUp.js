import * as React from "react";

function SvgSortUp(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M41.05 288.05h238c21.4 0 32.1 25.9 17 41l-119 119a23.9 23.9 0 01-33.8.1l-.1-.1-119.1-119c-15.05-15.05-4.4-41 17-41z"
        opacity={0.4}
      />
      <path
        d="M24.05 183.05l119.1-119A23.9 23.9 0 01177 64a.94.94 0 01.1.1l119 119c15.1 15.1 4.4 41-17 41h-238c-21.45-.05-32.1-25.95-17.05-41.05z"
        className="sort-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSortUp;
