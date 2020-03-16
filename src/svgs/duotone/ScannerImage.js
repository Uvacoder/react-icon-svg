import * as React from "react";

function SvgScannerImage(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M0 320v128a32 32 0 0032 32h576a32 32 0 0032-32V288H32a32 32 0 00-32 32zm120 80a8 8 0 01-8 8H80a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm96 0a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M617.84 220.84L36.31 32.83a16 16 0 00-20.25 10.1L.83 88.46a16 16 0 0010.1 20.25L566.88 288H640v-36.71a32 32 0 00-22.16-30.45zM112 360H80a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8z"
        className="scanner-image_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScannerImage;
