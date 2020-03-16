import * as React from "react";

function SvgBatterySlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M165.31 96H560a48 48 0 0148 48v16h8a24 24 0 0124 24v144a24 24 0 01-24 24h-8v16a48 48 0 01-32.14 45.31L496.54 352H544v-64h32v-64h-32v-64H248.12zM64 352V179.49l-62.13-48A47.37 47.37 0 000 144v224a48 48 0 0048 48h322l-82.81-64z"
        opacity={0.4}
      />
      <path
        d="M633.83 458.11L45.47 3.38A16 16 0 0023 6.17L3.37 31.46a16 16 0 002.81 22.45l588.35 454.73a16 16 0 0022.47-2.79l19.64-25.27a16 16 0 00-2.81-22.47z"
        className="battery-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBatterySlash;
