import * as React from "react";

function SvgCabinetFiling(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 480a32 32 0 0032 32h448a32 32 0 0032-32V256H0zm160-112a16 16 0 0116-16h160a16 16 0 0116 16v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-24H192v24a8 8 0 01-8 8h-16a8 8 0 01-8-8zM480 0H32A32 32 0 000 32v192h512V32a32 32 0 00-32-32zM352 152a8 8 0 01-8 8h-16a8 8 0 01-8-8v-24H192v24a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40a16 16 0 0116-16h160a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M336 96H176a16 16 0 00-16 16v40a8 8 0 008 8h16a8 8 0 008-8v-24h128v24a8 8 0 008 8h16a8 8 0 008-8v-40a16 16 0 00-16-16zm0 256H176a16 16 0 00-16 16v40a8 8 0 008 8h16a8 8 0 008-8v-24h128v24a8 8 0 008 8h16a8 8 0 008-8v-40a16 16 0 00-16-16z"
        className="cabinet-filing_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCabinetFiling;
