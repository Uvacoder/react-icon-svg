import * as React from "react";

function SvgCheeseburger(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M58.6 224h394.7c34.6 0 54.6-43.9 34.8-75.9C448 83.2 359.5 32.1 256 32c-103.5.1-192 51.2-232.2 116.1-19.8 32 .3 75.9 34.8 75.9zM384 112a16 16 0 11-16 16 16 16 0 0116-16zM256 80a16 16 0 11-16 16 16 16 0 0116-16zm-128 32a16 16 0 11-16 16 16 16 0 0116-16zm352 272H32a16 16 0 00-16 16v16a64.06 64.06 0 0064 64h352a64.06 64.06 0 0064-64v-16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M512 304a48 48 0 01-48 48H48a48 48 0 010-96h176l96 64 96-64h48a48 48 0 0148 48z"
        className="cheeseburger_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheeseburger;
