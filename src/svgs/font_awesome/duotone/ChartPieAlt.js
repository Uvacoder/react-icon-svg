import * as React from "react";

function SvgChartPieAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M461.29 288c9.54 0 17.39 8.39 16.06 17.84C460.53 424.92 356.57 516 231.93 511.87 107.91 507.8 4.2 404.1.13 280.07c-4.09-124.64 87-228.6 206-245.42 9.48-1.33 17.87 6.51 17.87 16.06V288z"
        opacity={0.4}
      />
      <path
        d="M512 223.2c.62 9.11-7 16.8-16.19 16.8H272V16.24C272 7.1 279.68-.59 288.8 0 408.26 8.28 503.72 103.74 512 223.2z"
        className="chart-pie-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChartPieAlt;
