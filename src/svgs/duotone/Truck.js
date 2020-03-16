import * as React from "react";

function SvgTruck(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M176 352a80 80 0 1080 80 80 80 0 00-80-80zm288 0a80 80 0 1080 80 80 80 0 00-80-80z"
        opacity={0.4}
      />
      <path
        d="M624 352h-16V243.9a48 48 0 00-14.1-33.9L494 110.1A48 48 0 00460.1 96H416V48a48 48 0 00-48-48H48A48 48 0 000 48v320a48 48 0 0048 48h18.16C74 361.93 119.78 320 176 320s102.54 41.86 110.38 96h67.24c7.85-54.14 54.1-96 110.38-96s102 41.93 109.84 96H624a16 16 0 0016-16v-32a16 16 0 00-16-16zm-64-96H416V144h44.1l99.9 99.9z"
        className="truck_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTruck;
