import * as React from "react";

function SvgSortDown(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M279.07 224.05h-238c-21.4 0-32.1-25.9-17-41l119-119a23.9 23.9 0 0133.8-.1l.1.1 119.1 119c15.07 15.05 4.4 41-17 41z"
        opacity={0.4}
      />
      <path
        d="M296.07 329.05L177 448.05a23.9 23.9 0 01-33.8.1l-.1-.1-119-119c-15.1-15.1-4.4-41 17-41h238c21.37 0 32.04 25.95 16.97 41z"
        className="sort-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSortDown;
