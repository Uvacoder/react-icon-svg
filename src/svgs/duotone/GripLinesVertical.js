import * as React from "react";

function SvgGripLinesVertical(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M224 16v480a16 16 0 01-16 16h-32a16 16 0 01-16-16V16a16 16 0 0116-16h32a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M96 16v480a16 16 0 01-16 16H48a16 16 0 01-16-16V16A16 16 0 0148 0h32a16 16 0 0116 16z"
        className="grip-lines-vertical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGripLinesVertical;
