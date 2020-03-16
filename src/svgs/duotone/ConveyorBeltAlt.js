import * as React from "react";

function SvgConveyorBeltAlt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M304 0H80a16 16 0 00-16 16v224a16 16 0 0016 16h224a16 16 0 0016-16V16a16 16 0 00-16-16zm256 64H400a16 16 0 00-16 16v160a16 16 0 0016 16h160a16 16 0 0016-16V80a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M544 320H96a96 96 0 000 192h448a96 96 0 000-192zM128 448a32 32 0 1132-32 32 32 0 01-32 32zm192 0a32 32 0 1132-32 32 32 0 01-32 32zm192 0a32 32 0 1132-32 32 32 0 01-32 32z"
        className="conveyor-belt-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgConveyorBeltAlt;
