import * as React from "react";

function SvgDewpoint(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M416 0a96 96 0 1096 96 96.15 96.15 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M384 333.9c0 98.4-85.9 178.1-192 178.1S0 432.3 0 333.9C0 222.69 109.1 179.79 160.1 22.09c9.8-30.1 55.1-28.8 63.8 0 51.2 158.5 160.1 200 160.1 311.81z"
        className="dewpoint_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDewpoint;
