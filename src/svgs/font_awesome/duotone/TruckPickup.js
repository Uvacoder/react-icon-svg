import * as React from "react";

function SvgTruckPickup(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M176 304a88 88 0 1088 88 88 88 0 00-88-88zm288 0a88 88 0 1088 88 88 88 0 00-88-88z"
        opacity={0.4}
      />
      <path
        d="M624 288h-16v-64a32 32 0 00-32-32h-48L419.22 56a64 64 0 00-50-24H256a32 32 0 00-32 32v128H64a32 32 0 00-32 32v64H16a16 16 0 00-16 16v32a16 16 0 0016 16h46.8a120.12 120.12 0 01226.4 0h61.6a120.12 120.12 0 01226.4 0H624a16 16 0 0016-16v-32a16 16 0 00-16-16zm-336-96V96h81.24L446 192z"
        className="truck-pickup_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTruckPickup;
