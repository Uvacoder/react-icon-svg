import * as React from "react";

function SvgSimCard(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M128 192H96a32 32 0 00-32 32v32h64zM64 416a32 32 0 0032 32h32v-64H64zm160-224h-64v64h64zm32 256h32a32 32 0 0032-32v-32h-64zm-96 0h64v-64h-64zm128-256h-32v64h64v-32a32 32 0 00-32-32zM64 352h256v-64H64z"
        opacity={0.4}
      />
      <path
        d="M256 0H64A64.06 64.06 0 000 64v384a64.06 64.06 0 0064 64h256a64.06 64.06 0 0064-64V128zm64 416a32 32 0 01-32 32H96a32 32 0 01-32-32V224a32 32 0 0132-32h192a32 32 0 0132 32z"
        className="sim-card_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSimCard;
