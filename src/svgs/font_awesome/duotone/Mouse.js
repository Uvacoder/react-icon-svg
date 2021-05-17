import * as React from "react";

function SvgMouse(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M176 0h-16A160 160 0 000 160v32h176zm48 0h-16v192h176v-32A160 160 0 00224 0zM0 352a160 160 0 00160 160h64a160 160 0 00160-160V224H0z"
        opacity={0.4}
      />
      <path
        d="M384 192v32H0v-32h176V0h32v192z"
        className="mouse_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMouse;
