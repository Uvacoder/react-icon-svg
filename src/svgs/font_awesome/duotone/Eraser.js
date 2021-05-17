import * as React from "react";

function SvgEraser(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 428v40a12 12 0 01-12 12H144a48 48 0 01-33.94-14.06l-96-96a48 48 0 010-67.88l136-136 227.88 227.88L355.88 416H500a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M377.94 393.94l120-120a48 48 0 000-67.88l-160-160a48 48 0 00-67.88 0l-120 120 45.25 45.25z"
        className="eraser_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEraser;
