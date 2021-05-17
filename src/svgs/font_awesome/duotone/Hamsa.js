import * as React from "react";

function SvgHamsa(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M288 352a32 32 0 11-32-32 32 32 0 0132 32z" opacity={0.4} />
      <path
        d="M509.34 307.25A32 32 0 00480 288h-64V80a40 40 0 00-80 0v134a10 10 0 01-10 10h-20a10 10 0 01-10-10V40a40 40 0 00-80 0v174a10 10 0 01-10 10h-20a10 10 0 01-10-10V80a40 40 0 00-80 0v208H32a32 32 0 00-23.4 53.83l102.69 110C147 490.08 199.69 512 256 512s109-21.92 144.72-60.14l102.68-110a32 32 0 005.94-34.61zM256 416c-53 0-96-64-96-64s43-64 96-64 96 64 96 64-43 64-96 64z"
        className="hamsa_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHamsa;
