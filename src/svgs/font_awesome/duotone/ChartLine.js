import * as React from "react";

function SvgChartLine(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 400v32a16 16 0 01-16 16H32a32 32 0 01-32-32V80a16 16 0 0116-16h32a16 16 0 0116 16v304h432a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M480 112v118.05c0 21.38-25.85 32.09-41 17l-32.4-32.4-96 96a32 32 0 01-45.25 0L192 237.25l-46.06 46.07a16 16 0 01-22.63 0l-22.62-22.62a16 16 0 010-22.63l68.69-68.69a32 32 0 0145.25 0L288 242.75l73.37-73.38L329 137c-15.12-15.12-4.41-41 17-41h118a16 16 0 0116 16z"
        className="chart-line_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChartLine;
