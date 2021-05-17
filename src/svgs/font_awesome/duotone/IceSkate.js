import * as React from "react";

function SvgIceSkate(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M568 416h-32a8 8 0 00-8 8v16a23.94 23.94 0 01-24 24h-72v-48h-48v48H144v-48H96v48H8a8 8 0 00-8 8v32a8 8 0 008 8h504a64.06 64.06 0 0064-64v-24a8 8 0 00-8-8zM264 192h56v-32h-56a8 8 0 00-8 8v16a8 8 0 008 8zm0-64h56V96h-56a8 8 0 00-8 8v16a8 8 0 008 8z"
        opacity={0.4}
      />
      <path
        d="M78.4 82.7L256 32V16a16 16 0 0116-16h32a16 16 0 0116 16v80h-56a8 8 0 00-8 8v16a8 8 0 008 8h56v32h-56a8 8 0 00-8 8v16a8 8 0 008 8h56l119.3 29.9A96 96 0 01512 315v37a32 32 0 01-32 32H64a32 32 0 01-32-32V144.2a64 64 0 0146.4-61.5z"
        className="ice-skate_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgIceSkate;
