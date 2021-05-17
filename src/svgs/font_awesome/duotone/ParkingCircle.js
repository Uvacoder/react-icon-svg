import * as React from "react";

function SvgParkingCircle(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M280 208h-48v32h48a16 16 0 000-32zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm32 296h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V160a16 16 0 0116-16h96a80 80 0 010 160z"
        opacity={0.4}
      />
      <path
        d="M280 144h-96a16 16 0 00-16 16v192a16 16 0 0016 16h32a16 16 0 0016-16v-48h48a80 80 0 000-160zm0 96h-48v-32h48a16 16 0 010 32z"
        className="parking-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgParkingCircle;
