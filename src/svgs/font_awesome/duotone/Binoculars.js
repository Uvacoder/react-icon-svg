import * as React from "react";

function SvgBinoculars(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M400 32h-64a16 16 0 00-16 16v48h96V48a16 16 0 00-16-16zm-224 0h-64a16 16 0 00-16 16v48h96V48a16 16 0 00-16-16zm48 256h64V128h-64z"
        opacity={0.4}
      />
      <path
        d="M63.91 160C61.4 253.84 3.46 274.22 0 404v44a32 32 0 0032 32h96a32 32 0 0032-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 32zm384.18 0c-.48-17.62-14.3-32-31.93-32H320v160h32v160a32 32 0 0032 32h96a32 32 0 0032-32v-44c-3.46-129.78-61.4-150.16-63.91-244z"
        className="binoculars_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBinoculars;
