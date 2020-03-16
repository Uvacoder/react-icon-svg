import * as React from "react";

function SvgPercentage(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M365.25 338.74a64 64 0 100 90.51 64 64 0 000-90.51zm-346.51-256a64 64 0 1090.51 0 64 64 0 00-90.51 0z"
        opacity={0.4}
      />
      <path
        d="M363.31 152.56L88.56 427.31a32 32 0 01-45.25 0l-22.62-22.62a32 32 0 010-45.25L295.44 84.69a32 32 0 0145.25 0l22.62 22.62a32 32 0 010 45.25z"
        className="percentage_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPercentage;
