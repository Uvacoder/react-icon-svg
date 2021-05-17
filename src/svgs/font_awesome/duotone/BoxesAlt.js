import * as React from "react";

function SvgBoxesAlt(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M320 0v88a8 8 0 01-8 8h-48a8 8 0 01-8-8V0zm160 288v88a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88zm-320 0v88a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88z"
        opacity={0.4}
      />
      <path
        d="M176 224h224a16 16 0 0016-16V16a16 16 0 00-16-16h-80v88a8 8 0 01-8 8h-48a8 8 0 01-8-8V0h-80a16 16 0 00-16 16v192a16 16 0 0016 16zm384 64h-80v88a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88h-80a16 16 0 00-16 16v192a16 16 0 0016 16h224a16 16 0 0016-16V304a16 16 0 00-16-16zm-320 0h-80v88a8 8 0 01-8 8h-48a8 8 0 01-8-8v-88H16a16 16 0 00-16 16v192a16 16 0 0016 16h224a16 16 0 0016-16V304a16 16 0 00-16-16z"
        className="boxes-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxesAlt;
