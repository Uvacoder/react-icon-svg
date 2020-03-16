import * as React from "react";

function SvgPalletAlt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M560 64H400a16 16 0 00-16 16v160a16 16 0 0016 16h160a16 16 0 0016-16V80a16 16 0 00-16-16zM304 0H80a16 16 0 00-16 16v224a16 16 0 0016 16h224a16 16 0 0016-16V16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M624 384a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16h48v64H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16h-48v-64zm-336 64H128v-64h160zm224 0H352v-64h160z"
        className="pallet-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPalletAlt;
