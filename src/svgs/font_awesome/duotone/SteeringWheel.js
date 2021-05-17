import * as React from "react";

function SvgSteeringWheel(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M432 256a185.53 185.53 0 01-2.76 32H328l-48 64v85.24a186.89 186.89 0 01-64 0V352l-48-64H66.76a186.89 186.89 0 010-64h94.13A63.69 63.69 0 01216 192h64a63.72 63.72 0 0155.12 32h94.11a185.54 185.54 0 012.77 32z"
        opacity={0.4}
      />
      <path
        d="M248 72A184 184 0 1164 256 184 184 0 01248 72m0-64C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8z"
        className="steering-wheel_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSteeringWheel;
