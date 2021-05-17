import * as React from "react";

function SvgScroll(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M544 96v288H304a16 16 0 00-16 16v32a80 80 0 01-160 0V65A65 65 0 0063 0h385a96.1 96.1 0 0196 96z"
        opacity={0.4}
      />
      <path
        d="M64 0A64 64 0 000 64v48a16 16 0 0016 16h112V65A65 65 0 0064 0zm128 512h16c-2.59 0-5.14-.13-7.66-.37-2.75.24-5.53.37-8.34.37zm432-128H304a16 16 0 00-16 16v32a80 80 0 01-80 80h320a112 112 0 00112-112.06A16 16 0 00624 384z"
        className="scroll_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScroll;
