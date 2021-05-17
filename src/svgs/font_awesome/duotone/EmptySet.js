import * as React from "react";

function SvgEmptySet(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M76.6 390.15A223 223 0 0132 256C32 132.29 132.29 32 256 32a223 223 0 01134.15 44.6l-57.46 57.46a144.07 144.07 0 00-198.63 198.63zm301.34-210.83a144.07 144.07 0 01-198.62 198.62l-57.46 57.47A223 223 0 00256 480c123.71 0 224-100.29 224-224a223 223 0 00-44.6-134.15z"
        opacity={0.4}
      />
      <path
        d="M507.31 50L50 507.32a16 16 0 01-22.63 0L4.69 484.69a16 16 0 010-22.63L462.06 4.69a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.69z"
        className="empty-set_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEmptySet;
