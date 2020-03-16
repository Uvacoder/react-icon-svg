import * as React from "react";

function SvgBoxAlt(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M256 32l32 128v112a16 16 0 01-16 16h-96a16 16 0 01-16-16V160l32-128z"
        opacity={0.4}
      />
      <path
        d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 00360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 00-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 01-16 16h-96a16 16 0 01-16-16v-80H0v256a32 32 0 0032 32h384a32 32 0 0032-32V192z"
        className="box-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxAlt;
