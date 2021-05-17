import * as React from "react";

function SvgGenderless(props) {
  return (
    <svg viewBox="0 0 288 512" {...props}>
      <path d="M144 336a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
      <path
        d="M144 112a144 144 0 10144 144 144 144 0 00-144-144zm0 224a80 80 0 1180-80 80 80 0 01-80 80z"
        className="genderless_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGenderless;
