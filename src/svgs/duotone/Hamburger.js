import * as React from "react";

function SvgHamburger(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 11-16 16 16 16 0 0116-16zM256 80a16 16 0 11-16 16 16 16 0 0116-16zm-128 32a16 16 0 11-16 16 16 16 0 0116-16zm352 272H32a16 16 0 00-16 16v16a64 64 0 0064 64h352a64 64 0 0064-64v-16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M512 304a48 48 0 01-48 48H48a48 48 0 010-96h416a48 48 0 0148 48z"
        className="hamburger_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHamburger;
