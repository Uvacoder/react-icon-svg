import * as React from "react";

function SvgPennant(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M128 360.8V112.5a15.8 15.8 0 0116.3-16c43.2 2 95.3 13.2 155.2 42.4 140.6 68.5 223.7 62.9 252.9 57.2 18-3.8 31.3 18.1 18.6 32.4-78.1 88.2-179.8 108.8-184.1 109.6-134.8 26.1-153.3 7.5-237.1 37.5-10.6 3.8-21.8-3.6-21.8-14.8z"
        opacity={0.4}
      />
      <path
        d="M0 56a56 56 0 1180 50.4V504a8 8 0 01-8 8H40a8 8 0 01-8-8V106.4A56 56 0 010 56z"
        className="pennant_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPennant;
