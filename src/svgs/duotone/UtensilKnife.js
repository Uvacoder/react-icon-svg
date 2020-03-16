import * as React from "react";

function SvgUtensilKnife(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M180.89 252.82L425.47 8.7a29.54 29.54 0 0141.72-.15l.15.15C539.27 80.49 502 359.8 258.61 330.1l-.14.16z"
        opacity={0.4}
      />
      <path
        d="M113 501.55A29.59 29.59 0 0171.36 505c-.64-.53-1.24-1.09-1.82-1.67l-48.89-48.77a29.58 29.58 0 010-41.8l160.28-160 77.5 77.48z"
        className="utensil-knife_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUtensilKnife;
