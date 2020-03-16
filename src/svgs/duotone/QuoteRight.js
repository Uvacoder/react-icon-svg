import * as React from "react";

function SvgQuoteRight(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M176 32H48A48 48 0 000 80v128a48 48 0 0048 48h80v64a64.06 64.06 0 01-64 64h-8a23.94 23.94 0 00-24 23.88V456a23.94 23.94 0 0023.88 24H64a160 160 0 00160-160V80a48 48 0 00-48-48z"
        opacity={0.4}
      />
      <path
        d="M464 32H336a48 48 0 00-48 48v128a48 48 0 0048 48h80v64a64.06 64.06 0 01-64 64h-8a23.94 23.94 0 00-24 23.88V456a23.94 23.94 0 0023.88 24H352a160 160 0 00160-160V80a48 48 0 00-48-48z"
        className="quote-right_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgQuoteRight;
