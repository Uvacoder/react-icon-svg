import * as React from "react";

function SvgPen(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M498 142.08l-56.6 56.55-128-128 56.55-56.55a48 48 0 0167.91 0L498 74.17a48 48 0 010 67.91z"
        opacity={0.4}
      />
      <path
        d="M12.85 371.11L.15 485.33a24 24 0 0026.49 26.51l114.14-12.6 278-278-128-128z"
        className="pen_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPen;
