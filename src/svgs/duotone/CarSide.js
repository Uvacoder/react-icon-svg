import * as React from "react";

function SvgCarSide(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M144 320a80 80 0 1080 80 80 80 0 00-80-80zm352 0a80 80 0 1080 80 80 80 0 00-80-80zM369.24 96H280v96h166zm-252.31 96H232V96h-76.67z"
        opacity={0.4}
      />
      <path
        d="M16 384h17.14a112 112 0 01221.72 0h130.28a112 112 0 01221.72 0H624a16 16 0 0016-16v-80a96 96 0 00-96-96h-16L419.22 56a64 64 0 00-50-24H155.33a64 64 0 00-59.42 40.23L48 194.26A63.85 63.85 0 000 256v112a16 16 0 0016 16zM280 96h89.24L446 192H280zm-124.67 0H232v96H116.93z"
        className="car-side_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCarSide;
