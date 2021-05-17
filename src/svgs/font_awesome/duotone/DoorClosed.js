import * as React from "react";

function SvgDoorClosed(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h608a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M464 0H176c-26.47 0-48 22.78-48 50.8V448h384V50.8C512 22.78 490.47 0 464 0zm-48 288a32 32 0 1132-32 32 32 0 01-32 32z"
        className="door-closed_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDoorClosed;
