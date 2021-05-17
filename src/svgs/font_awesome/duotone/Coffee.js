import * as React from "react";

function SvgCoffee(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M559.76 480H48.36c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
        opacity={0.4}
      />
      <path
        d="M512.06 32h-392a23.94 23.94 0 00-24 24v232a96 96 0 0096 96h192a96 96 0 0096-96h32a128 128 0 000-256zm0 192h-32V96h32a64 64 0 010 128z"
        className="coffee_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCoffee;
