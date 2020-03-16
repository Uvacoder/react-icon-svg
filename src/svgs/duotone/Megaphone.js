import * as React from "react";

function SvgMegaphone(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M480 64L64 192v128l101.72 31.3a96 96 0 10183.33 56.41L480 448zM256 432a48 48 0 01-44.27-66.54L303 393.55A48.07 48.07 0 01256 432z"
        opacity={0.4}
      />
      <path
        d="M560 32h-32a16 16 0 00-16 16v416a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zM32 160a32 32 0 00-32 32v128a32 32 0 0064 0V192a32 32 0 00-32-32z"
        className="megaphone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMegaphone;
