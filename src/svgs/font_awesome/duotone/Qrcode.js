import * as React from "react";

function SvgQrcode(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M0 480h192V288H0zm64-128h64v64H64zM256 32v192h192V32zm128 128h-64V96h64zM0 224h192V32H0zM64 96h64v64H64z"
        opacity={0.4}
      />
      <path
        d="M416 480h32v-32h-32zm-64 0h32v-32h-32zm64-192v32h-64v-32h-96v192h64v-96h32v32h96V288z"
        className="qrcode_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgQrcode;
