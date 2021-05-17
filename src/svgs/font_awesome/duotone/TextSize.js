import * as React from "react";

function SvgTextSize(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M320 240v64a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16h-56v128h24a16 16 0 0116 16v32a16 16 0 01-16 16H96a16 16 0 01-16-16v-32a16 16 0 0116-16h24V288H64v16a16 16 0 01-16 16H16a16 16 0 01-16-16v-64a16 16 0 0116-16h288a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M640 48v96a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32h-88v304h40a16 16 0 0116 16v32a16 16 0 01-16 16H368a16 16 0 01-16-16v-32a16 16 0 0116-16h40V112h-88v32a16 16 0 01-16 16h-32a16 16 0 01-16-16V48a16 16 0 0116-16h352a16 16 0 0116 16z"
        className="text-size_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTextSize;
