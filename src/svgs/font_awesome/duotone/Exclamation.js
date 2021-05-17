import * as React from "react";

function SvgExclamation(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path d="M96 512a80 80 0 1180-80 80.09 80.09 0 01-80 80z" opacity={0.4} />
      <path
        d="M49.22 0h93.56a24 24 0 0124 25.2l-13.63 272a24 24 0 01-24 22.8H62.84a24 24 0 01-24-22.8l-13.59-272A24 24 0 0149.22 0z"
        className="exclamation_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgExclamation;
