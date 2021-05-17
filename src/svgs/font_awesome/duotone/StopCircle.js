import * as React from "react";

function SvgStopCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328a16 16 0 01-16 16H176a16 16 0 01-16-16V176a16 16 0 0116-16h160a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M352 176v160a16 16 0 01-16 16H176a16 16 0 01-16-16V176a16 16 0 0116-16h160a16 16 0 0116 16z"
        className="stop-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStopCircle;
