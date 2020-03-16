import * as React from "react";

function SvgTemperatureHigh(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 278.5V112a112 112 0 00-224 0v166.5C12.3 303.2 0 334 0 368a144 144 0 00288 0c0-34-12.3-64.9-32-89.5zM144 448a79.87 79.87 0 01-48-143.8V112a48 48 0 0196 0v192.2A79.87 79.87 0 01144 448z"
        opacity={0.4}
      />
      <path
        d="M416 0a96 96 0 1096 96 96.15 96.15 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32zM160 322.9V112a16 16 0 00-32 0v210.9a48 48 0 1032 0z"
        className="temperature-high_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTemperatureHigh;
