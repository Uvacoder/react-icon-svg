import * as React from "react";

function SvgQuoteLeft(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M464 256h-80v-64a64.06 64.06 0 0164-64h8a23.94 23.94 0 0024-23.88V56a23.94 23.94 0 00-23.88-24H448a160 160 0 00-160 160v240a48 48 0 0048 48h128a48 48 0 0048-48V304a48 48 0 00-48-48z"
        opacity={0.4}
      />
      <path
        d="M176 256H96v-64a64.06 64.06 0 0164-64h8a23.94 23.94 0 0024-23.88V56a23.94 23.94 0 00-23.88-24H160A160 160 0 000 192v240a48 48 0 0048 48h128a48 48 0 0048-48V304a48 48 0 00-48-48z"
        className="quote-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgQuoteLeft;
