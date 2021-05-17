import * as React from "react";

function SvgAirFreshener(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M304 432v32H80v-32h224m32-48H48a16 16 0 00-16 16v96a16 16 0 0016 16h288a16 16 0 0016-16v-96a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M378.94 321.41L284.7 224h49.22c15.3 0 23.66-16.6 13.86-27.53L234.45 70A47.45 47.45 0 00240 48a48 48 0 00-96 0 47.45 47.45 0 005.55 22L36.22 196.47C26.42 207.4 34.78 224 50.08 224H99.3L5.06 321.41C-6.69 333.56 3.34 352 21.7 352H160v32h64v-32h138.3c18.36 0 28.39-18.44 16.64-30.59zM192 64a16 16 0 1116-16 16 16 0 01-16 16z"
        className="air-freshener_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAirFreshener;
