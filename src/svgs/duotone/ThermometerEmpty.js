import * as React from "react";

function SvgThermometerEmpty(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M272 278.5V112a112 112 0 00-224 0v166.5C28.3 303.2 16 334 16 368a144 144 0 00288 0c0-34-12.3-64.9-32-89.5zM160 448a79.87 79.87 0 01-48-143.8V112a48 48 0 0196 0v192.2A79.87 79.87 0 01160 448z"
        opacity={0.4}
      />
      <path
        d="M208 368a48 48 0 11-48-48 48 48 0 0148 48z"
        className="thermometer-empty_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgThermometerEmpty;
