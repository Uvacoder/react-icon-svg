import * as React from "react";

function SvgSack(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M192 96h128l47.4-71.12A16 16 0 00354.09 0H157.94a16 16 0 00-13.31 24.88zm128 32H192C-10.38 243.4.09 396.64.09 416c0 53 49.11 96 109.68 96h292.48c60.58 0 109.68-43 109.68-96 0-19 9.35-173.24-191.93-288z"
        opacity={0.4}
      />
      <path
        d="M337 104v16a8 8 0 01-8 8H183a8 8 0 01-8-8v-16a8 8 0 018-8h146a8 8 0 018 8z"
        className="sack_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSack;
