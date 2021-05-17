import * as React from "react";

function SvgBackpack(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M320 320H128a32 32 0 00-32 32v32h256v-32a32 32 0 00-32-32zM136 208h176a8 8 0 008-8v-16a8 8 0 00-8-8H136a8 8 0 00-8 8v16a8 8 0 008 8z"
        opacity={0.4}
      />
      <path
        d="M96 512h256v-96H96zM320 80h-8V56a56.06 56.06 0 00-56-56h-64a56.06 56.06 0 00-56 56v24h-8A128 128 0 000 208v240a64 64 0 0064 64V352a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v160a64 64 0 0064-64V208A128 128 0 00320 80zM184 56a8 8 0 018-8h64a8 8 0 018 8v24h-80zm136 144a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8z"
        className="backpack_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBackpack;
