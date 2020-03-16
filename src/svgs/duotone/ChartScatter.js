import * as React from "react";

function SvgChartScatter(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 400v32a16 16 0 01-16 16H32a32 32 0 01-32-32V80a16 16 0 0116-16h32a16 16 0 0116 16v304h432a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M160 256a32 32 0 1032 32 32 32 0 00-32-32zM416 96a32 32 0 1032 32 32 32 0 00-32-32zm-224 0a32 32 0 1032 32 32 32 0 00-32-32zm192 160a32 32 0 1032 32 32 32 0 00-32-32zm-96-64a32 32 0 1032 32 32 32 0 00-32-32z"
        className="chart-scatter_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChartScatter;
