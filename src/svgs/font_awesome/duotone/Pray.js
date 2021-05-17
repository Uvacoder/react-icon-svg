import * as React from "react";

function SvgPray(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M256 128a64 64 0 1164-64 64 64 0 01-64 64z" opacity={0.4} />
      <path
        d="M201.22 269l-34.8 64.87 109.86 109.85C301.77 469.21 282.08 512 248 512H40a40 40 0 010-80h91.56l-44.81-34.89C43.87 369.73 29.16 317 52.56 273.36l49.37-92c11.12-20.65 32.18-34.44 56.37-36.92 24.78-2.59 48.56 6.94 64 25.33l38.91 46.31 57.44-47A40 40 0 11369.34 231l-88 72a40 40 0 01-56-5.22z"
        className="pray_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPray;
