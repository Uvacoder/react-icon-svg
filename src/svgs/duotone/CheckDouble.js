import * as React from "react";

function SvgCheckDouble(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M166.57 282.71L44 159.21a17.87 17.87 0 01.18-25.2l42.1-41.77a17.87 17.87 0 0125.2.18l68.23 68.77L336.87 5.11a17.88 17.88 0 0125.21.18L404 47.41a17.88 17.88 0 01-.18 25.21L191.78 282.89a17.88 17.88 0 01-25.21-.18z"
        opacity={0.4}
      />
      <path
        d="M504.5 172a25.86 25.86 0 010 36.42L210.1 504.46a25.48 25.48 0 01-36.2 0L7.5 337.1a25.84 25.84 0 010-36.41l36.2-36.41a25.48 25.48 0 0136.2 0L192 377l240.1-241.46a25.5 25.5 0 0136.2 0L504.5 172z"
        className="check-double_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheckDouble;
