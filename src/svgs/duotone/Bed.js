import * as React from "react";

function SvgBed(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M528 128H304a16 16 0 00-16 16v144h352v-48a112 112 0 00-112-112zM176 96a80 80 0 1080 80 80 80 0 00-80-80z"
        opacity={0.4}
      />
      <path
        d="M640 288v144a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48H64v48a16 16 0 01-16 16H16a16 16 0 01-16-16V80a16 16 0 0116-16h32a16 16 0 0116 16v208z"
        className="bed_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBed;
