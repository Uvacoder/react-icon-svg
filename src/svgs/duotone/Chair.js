import * as React from "react";

function SvgChair(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M112 256H64V128A128 128 0 01192 0h64a128 128 0 01128 128v128h-48V128c0-29.5-16.2-55-40-68.9V256h-48V48h-48v208h-48V59.1C128.24 73 112 98.5 112 128z"
        opacity={0.4}
      />
      <path
        d="M416.05 384v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V384H96v112a16 16 0 01-16 16H48a16 16 0 01-16-16V384a32.07 32.07 0 01-30.4-42.1l10.7-32A32 32 0 0142.71 288h362.54a32 32 0 0130.4 21.9l10.71 32a32 32 0 01-30.31 42.1z"
        className="chair_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChair;
