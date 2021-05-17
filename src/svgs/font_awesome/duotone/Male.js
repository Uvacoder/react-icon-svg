import * as React from "react";

function SvgMale(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path d="M32 64a64 64 0 1164 64 64 64 0 01-64-64z" opacity={0.4} />
      <path
        d="M48 144h11.36a87.91 87.91 0 0073.28 0H144a48 48 0 0148 48v136a24 24 0 01-24 24h-16v136a24 24 0 01-24 24H64a24 24 0 01-24-24V352H24a24 24 0 01-24-24V192a48 48 0 0148-48z"
        className="male_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMale;
