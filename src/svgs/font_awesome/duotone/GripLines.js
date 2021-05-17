import * as React from "react";

function SvgGripLines(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 304v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M512 176v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16z"
        className="grip-lines_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGripLines;
