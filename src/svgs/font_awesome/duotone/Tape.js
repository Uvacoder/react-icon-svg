import * as React from "react";

function SvgTape(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M624 416H380.6A223.47 223.47 0 00448 256c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400a16 16 0 0016-16v-32a16 16 0 00-16-16zm-400-64a96 96 0 1196-96 96 96 0 01-96 96z"
        opacity={0.4}
      />
      <path
        d="M288 256a64 64 0 11-64-64 64.06 64.06 0 0164 64z"
        className="tape_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTape;
