import * as React from "react";

function SvgCarBattery(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M176 64H80a16 16 0 00-16 16v48h128V80a16 16 0 00-16-16zm256 0h-96a16 16 0 00-16 16v48h128V80a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M480 128H32a32 32 0 00-32 32v256a32 32 0 0032 32h448a32 32 0 0032-32V160a32 32 0 00-32-32zM192 264a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm256 0a8 8 0 01-8 8h-40v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40h-40a8 8 0 01-8-8v-16a8 8 0 018-8h40v-40a8 8 0 018-8h16a8 8 0 018 8v40h40a8 8 0 018 8z"
        className="car-battery_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCarBattery;
