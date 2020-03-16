import * as React from "react";

function SvgVectorSquare(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M160 480h192v-64H160zM32 352h64V160H32zM160 96h192V32H160zm256 64v192h64V160z"
        opacity={0.4}
      />
      <path
        d="M128 352H32a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32zm-32 96H64v-32h32zm384-96h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32v-96a32 32 0 00-32-32zm-32 96h-32v-32h32zM480 0h-96a32 32 0 00-32 32v96a32 32 0 0032 32h96a32 32 0 0032-32V32a32 32 0 00-32-32zm-32 96h-32V64h32zM128 0H32A32 32 0 000 32v96a32 32 0 0032 32h96a32 32 0 0032-32V32a32 32 0 00-32-32zM96 96H64V64h32z"
        className="vector-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVectorSquare;
