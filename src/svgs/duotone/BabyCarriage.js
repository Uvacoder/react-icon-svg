import * as React from "react";

function SvgBabyCarriage(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M96 384a64 64 0 1064 64 64 64 0 00-64-64zm256 0a64 64 0 1064 64 64 64 0 00-64-64zM90.8 7.61C35.3 51.91 0 118 0 192h256L144.8 17c-11.3-17.79-37.2-22.79-54-9.39z"
        opacity={0.4}
      />
      <path
        d="M496 96h-48a64.06 64.06 0 00-64 64v64H0a191.44 191.44 0 0056.82 136.34 96.07 96.07 0 01129.68 55.58c1.83.05 3.66.08 5.5.08h64c1.84 0 3.67 0 5.5-.08a96.07 96.07 0 01129.68-55.58A191.44 191.44 0 00448 224v-64h48a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="baby-carriage_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBabyCarriage;
