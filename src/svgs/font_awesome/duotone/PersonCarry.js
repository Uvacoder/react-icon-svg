import * as React from "react";

function SvgPersonCarry(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M80 0a48 48 0 1048 48A48 48 0 0080 0zm288 96H208a16 16 0 00-16 16v176h176a16 16 0 0016-16V112a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M0 479.9a32 32 0 0064 0v-74.5C48 391.7.6 350.8 0 350.3zM128 288h64v-64h-25.4l-33.3-61.8A63.81 63.81 0 0076.7 128H48a48 48 0 00-48 48v103a64.05 64.05 0 0022.4 48.6l76 65.1 14.1 92.5c1 5.7 10.1 30.7 36.8 26.3a32 32 0 0026.3-36.8l-14.1-92.5a64.41 64.41 0 00-21.5-38.1l-44-37.7v-78.3z"
        className="person-carry_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPersonCarry;
