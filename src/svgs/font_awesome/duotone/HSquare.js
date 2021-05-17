import * as React from "react";

function SvgHSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-48 336a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80H160v80a16 16 0 01-16 16h-32a16 16 0 01-16-16V144a16 16 0 0116-16h32a16 16 0 0116 16v80h128v-80a16 16 0 0116-16h32a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M352 368a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80H160v80a16 16 0 01-16 16h-32a16 16 0 01-16-16V144a16 16 0 0116-16h32a16 16 0 0116 16v80h128v-80a16 16 0 0116-16h32a16 16 0 0116 16z"
        className="h-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHSquare;
