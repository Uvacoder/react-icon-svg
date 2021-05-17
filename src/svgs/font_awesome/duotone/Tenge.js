import * as React from "react";

function SvgTenge(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M372 160H12a12 12 0 00-12 12v56a12 12 0 0012 12h140v228a12 12 0 0012 12h56a12 12 0 0012-12V240h140a12 12 0 0012-12v-56a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M372 32H12A12 12 0 000 44v56a12 12 0 0012 12h360a12 12 0 0012-12V44a12 12 0 00-12-12z"
        className="tenge_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTenge;
