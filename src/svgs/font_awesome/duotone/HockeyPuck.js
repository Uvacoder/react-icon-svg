import * as React from "react";

function SvgHockeyPuck(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 160c0-53 114.6-96 256-96s256 43 256 96-114.6 96-256 96S0 213 0 160z"
        opacity={0.4}
      />
      <path
        d="M0 352V242.2c113.5 82.4 398.6 82.3 512 0V352c0 53-114.6 96-256 96S0 405 0 352z"
        className="hockey-puck_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHockeyPuck;
