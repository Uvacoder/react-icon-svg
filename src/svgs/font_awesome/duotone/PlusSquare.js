import * as React from "react";

function SvgPlusSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-32 252a12 12 0 01-12 12h-92v92a12 12 0 01-12 12h-56a12 12 0 01-12-12v-92H92a12 12 0 01-12-12v-56a12 12 0 0112-12h92v-92a12 12 0 0112-12h56a12 12 0 0112 12v92h92a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M80 228a12 12 0 0112-12h92v-92a12 12 0 0112-12h56a12 12 0 0112 12v92h92a12 12 0 0112 12v56a12 12 0 01-12 12h-92v92a12 12 0 01-12 12h-56a12 12 0 01-12-12v-92H92a12 12 0 01-12-12z"
        className="plus-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPlusSquare;
