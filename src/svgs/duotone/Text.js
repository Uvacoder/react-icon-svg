import * as React from "react";

function SvgText(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M304 416a16 16 0 0116 16v32a16 16 0 01-16 16H144a16 16 0 01-16-16v-32a16 16 0 0116-16z"
        opacity={0.4}
      />
      <path
        d="M448 48v96a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32H264v304h-80V112H64v32a16 16 0 01-16 16H16a16 16 0 01-16-16V48a16 16 0 0116-16h416a16 16 0 0116 16z"
        className="text_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgText;
