import * as React from "react";

function SvgLuggageCart(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M480 48a48 48 0 00-48-48h-96a48 48 0 00-48 48v272h192zm-48 48h-96V48h96zm-240 32v160a32 32 0 0032 32h32V96h-32a32 32 0 00-32 32zm352-32h-32v224h32a32 32 0 0032-32V128a32 32 0 00-32-32zm-93.26 352a48 48 0 1090.52 0zm-288 0a48 48 0 1090.52 0z"
        opacity={0.4}
      />
      <path
        d="M624 384H128V16a16 16 0 00-16-16H16A16 16 0 000 16v32a16 16 0 0016 16h48v368a16 16 0 0016 16h544a16 16 0 0016-16v-32a16 16 0 00-16-16zM288 96h-32v224h32zm224 0h-32v224h32z"
        className="luggage-cart_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLuggageCart;
