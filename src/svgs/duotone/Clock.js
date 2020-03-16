import * as React from "react";

function SvgClock(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M220 116a12 12 0 0112-12h48a12 12 0 0112 12v137.7l63.5 46.2a12 12 0 012.6 16.8l-28.2 38.8a12.08 12.08 0 01-16.8 2.6L224.9 294a12.08 12.08 0 01-4.9-9.7z"
        opacity={0.4}
      />
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm102.1 308.7l-28.2 38.8a12.08 12.08 0 01-16.8 2.6L224.9 294a12.08 12.08 0 01-4.9-9.7V116a12 12 0 0112-12h48a12 12 0 0112 12v137.7l63.5 46.2a12 12 0 012.6 16.8z"
        className="clock_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgClock;
