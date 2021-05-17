import * as React from "react";

function SvgUtensilSpoon(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M446.15 269.48c-40.61 40.61-136.09 44.92-192.32-11.31S201.9 106.46 242.52 65.85C310.4-2 423.86-24.33 480.09 31.91S514 201.6 446.15 269.48z"
        opacity={0.4}
      />
      <path
        d="M293.78 285.89L98.8 503a27.26 27.26 0 01-38.5 2c-.34-.31-.67-.62-1-.95L8 452.78a27.18 27.18 0 01-.12-38.44c.36-.36.74-.72 1.12-1.06l217.14-195a136.7 136.7 0 0067.66 67.65z"
        className="utensil-spoon_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUtensilSpoon;
