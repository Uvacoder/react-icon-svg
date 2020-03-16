import * as React from "react";

function SvgCheese(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M299.83 32C418 38.22 512 136.13 512 256H0L278.7 39a32 32 0 0121.13-7z"
        opacity={0.4}
      />
      <path
        d="M512 288v160a32 32 0 01-32 32H32a32 32 0 01-32-32V288z"
        className="cheese_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheese;
