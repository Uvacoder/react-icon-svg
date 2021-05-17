import * as React from "react";

function SvgWasher(props) {
  return (
    <svg viewBox="0 0 446 512" {...props}>
      <path
        d="M298 300a51.75 51.75 0 0036.11-14.69A110.76 110.76 0 01336 304a112 112 0 01-224 0 110.76 110.76 0 011.89-18.69 51.79 51.79 0 0073.24-1 51.23 51.23 0 0073.74 0A51.81 51.81 0 00298 300z"
        opacity={0.4}
      />
      <path
        d="M384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zM184 64a24 24 0 11-24 24 24 24 0 0124-24zM64 88a24 24 0 1124 24 24 24 0 01-24-24zm160 360a144 144 0 11144-144 144 144 0 01-144 144z"
        className="washer_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWasher;
