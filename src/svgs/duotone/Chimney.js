import * as React from "react";

function SvgChimney(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M160 224H32v128h128zM32 512h288V384H32zm320 0h128V384H352zM192 224v128h288V224z"
        opacity={0.4}
      />
      <path
        d="M0 160V32A32 32 0 0132 0h448a32 32 0 0132 32v128a32 32 0 01-32 32H32a32 32 0 01-32-32z"
        className="chimney_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChimney;
