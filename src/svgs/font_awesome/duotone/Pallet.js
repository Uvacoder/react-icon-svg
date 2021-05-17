import * as React from "react";

function SvgPallet(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M256 0v128l64-32 64 32V0h112a16 16 0 0116 16v224a16 16 0 01-16 16H144a16 16 0 01-16-16V16a16 16 0 0116-16z"
        opacity={0.4}
      />
      <path
        d="M624 384a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16h48v64H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16h-48v-64zm-336 64H128v-64h160zm224 0H352v-64h160zM384 128V0H256v128l64-32z"
        className="pallet_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPallet;
