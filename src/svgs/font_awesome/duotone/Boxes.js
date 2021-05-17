import * as React from "react";

function SvgBoxes(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M480 288v96l-32-21.3-32 21.3v-96zM320 0v96l-32-21.3L256 96V0zM160 288v96l-32-21.3L96 384v-96z"
        opacity={0.4}
      />
      <path
        d="M560 288h-80v96l-32-21.3-32 21.3v-96h-80a16 16 0 00-16 16v192a16 16 0 0016 16h224a16 16 0 0016-16V304a16 16 0 00-16-16zm-384-64h224a16 16 0 0016-16V16a16 16 0 00-16-16h-80v96l-32-21.3L256 96V0h-80a16 16 0 00-16 16v192a16 16 0 0016 16zm64 64h-80v96l-32-21.3L96 384v-96H16a16 16 0 00-16 16v192a16 16 0 0016 16h224a16 16 0 0016-16V304a16 16 0 00-16-16z"
        className="boxes_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxes;
