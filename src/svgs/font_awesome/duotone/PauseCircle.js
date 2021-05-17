import * as React from "react";

function SvgPauseCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328a16 16 0 01-16 16h-48a16 16 0 01-16-16V176a16 16 0 0116-16h48a16 16 0 0116 16zm112 0a16 16 0 01-16 16h-48a16 16 0 01-16-16V176a16 16 0 0116-16h48a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M224 160h-48a16 16 0 00-16 16v160a16 16 0 0016 16h48a16 16 0 0016-16V176a16 16 0 00-16-16zm112 0h-48a16 16 0 00-16 16v160a16 16 0 0016 16h48a16 16 0 0016-16V176a16 16 0 00-16-16z"
        className="pause-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPauseCircle;
