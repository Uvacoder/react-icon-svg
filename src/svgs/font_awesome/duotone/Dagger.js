import * as React from "react";

function SvgDagger(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M128 428.84V224h128v204.84l-50.68 76a16 16 0 01-26.63 0z"
        opacity={0.4}
      />
      <path
        d="M290.94 192H93.06A47.92 47.92 0 1148 128h112V16a16 16 0 0116-16h32a16 16 0 0116 16v112h112a48 48 0 11-45.06 64z"
        className="dagger_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDagger;
