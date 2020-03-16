import * as React from "react";

function SvgBringForward(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 208v256a48 48 0 01-48 48H208a48 48 0 01-48-48V352h64v96h224V224h-96v-64h112a48 48 0 0148 48z"
        opacity={0.4}
      />
      <path
        d="M304 352H48a48 48 0 01-48-48V48A48 48 0 0148 0h256a48 48 0 0148 48v256a48 48 0 01-48 48z"
        className="bring-forward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBringForward;
