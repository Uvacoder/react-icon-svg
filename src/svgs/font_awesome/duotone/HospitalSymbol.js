import * as React from "react";

function SvgHospitalSymbol(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 376a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88h-96v88a8 8 0 01-8 8h-48a8 8 0 01-8-8V136a8 8 0 018-8h48a8 8 0 018 8v88h96v-88a8 8 0 018-8h48a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M368 376a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88h-96v88a8 8 0 01-8 8h-48a8 8 0 01-8-8V136a8 8 0 018-8h48a8 8 0 018 8v88h96v-88a8 8 0 018-8h48a8 8 0 018 8z"
        className="hospital-symbol_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHospitalSymbol;
