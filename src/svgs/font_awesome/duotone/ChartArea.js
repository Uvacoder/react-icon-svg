import * as React from "react";

function SvgChartArea(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M500 384a12 12 0 0112 12v40a12 12 0 01-12 12H12a12 12 0 01-12-12V76a12 12 0 0112-12h40a12 12 0 0112 12v308z"
        opacity={0.4}
      />
      <path
        d="M390.1 164.2L480 352H96V248l86.8-144.7a12 12 0 0119.9-1L288 216l84.7-56.5a12 12 0 0117.4 4.7z"
        className="chart-area_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChartArea;
