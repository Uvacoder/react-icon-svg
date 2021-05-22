import * as React from "react";

function SvgCoffeeTogo(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M48 160h352l-8 96H56zm330.67 256H69.33l-11-131.76 16.56 198.42A32 32 0 00106.78 512h234.44a32 32 0 0031.89-29.34l16.54-198.42z"
        opacity={0.4}
      />
      <path
        d="M69.33 416h309.34L392 256H56zM432 64h-16l-23.16-46.31A32 32 0 00364.22 0H83.78a32 32 0 00-28.62 17.69L32 64H16A16 16 0 000 80v32a16 16 0 0016 16h416a16 16 0 0016-16V80a16 16 0 00-16-16z"
        className="coffee-togo_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCoffeeTogo;