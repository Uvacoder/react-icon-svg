import * as React from "react";

function SvgCheeseSwiss(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M299.83 32C418 38.22 512 136.13 512 256H0l141.84-110.44a47.91 47.91 0 0075.1-58.48L278.7 39a32 32 0 0121.13-7z"
        opacity={0.4}
      />
      <path
        d="M416 288a48 48 0 01-96 0H0v160a32 32 0 0032 32h448a32 32 0 0032-32V288zM176 432a48 48 0 1148-48 48 48 0 01-48 48z"
        className="cheese-swiss_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheeseSwiss;
