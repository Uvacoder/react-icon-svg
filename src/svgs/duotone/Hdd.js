import * as React from "react";

function SvgHdd(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M384 320a32 32 0 1032 32 32 32 0 00-32-32zm175.88-88.18L462.25 85.37A48 48 0 00422.31 64H153.69a48 48 0 00-39.94 21.37L16.12 231.82A96 96 0 000 285.07V304a48 48 0 0148-48h480a48 48 0 0148 48v-18.93a96 96 0 00-16.12-53.25z"
        opacity={0.4}
      />
      <path
        d="M528 256H48a48 48 0 00-48 48v96a48 48 0 0048 48h480a48 48 0 0048-48v-96a48 48 0 00-48-48zM384 384a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
        className="hdd_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHdd;
