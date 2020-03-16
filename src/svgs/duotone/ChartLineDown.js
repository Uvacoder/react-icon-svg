import * as React from "react";

function SvgChartLineDown(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 400v32a16 16 0 01-16 16H32a32 32 0 01-32-32V80a16 16 0 0116-16h32a16 16 0 0116 16v304h432a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M464 320H346c-21.38 0-32.09-25.85-17-41l32.4-32.4-73.4-73.35-73.37 73.38a32 32 0 01-45.25 0l-68.69-68.69a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L192 178.75l73.38-73.38a32 32 0 0145.25 0l96 96L439 169c15.12-15.12 41-4.41 41 17v118a16 16 0 01-16 16z"
        className="chart-line-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChartLineDown;
