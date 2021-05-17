import * as React from "react";

function SvgConveyorBelt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M128 240V16a16 16 0 0116-16h352a16 16 0 0116 16v224a16 16 0 01-16 16H144a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M544 320H96a96 96 0 000 192h448a96 96 0 000-192zM128 448a32 32 0 1132-32 32 32 0 01-32 32zm192 0a32 32 0 1132-32 32 32 0 01-32 32zm192 0a32 32 0 1132-32 32 32 0 01-32 32zM384 128V0H256v128l64-32z"
        className="conveyor-belt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgConveyorBelt;
