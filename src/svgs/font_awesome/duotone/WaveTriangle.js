import * as React from "react";

function SvgWaveTriangle(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M464 480h-.34a32 32 0 01-25.25-12.8l-263-350.65L53.73 281.88a16 16 0 01-22.46 2.7L6.12 264.82a16 16 0 01-2.7-22.47L150.84 44.23A32 32 0 01176 32h.34a32 32 0 0125.25 12.8l263 350.65 121.68-165.33a16 16 0 0122.46-2.7l25.15 19.76a16 16 0 012.7 22.47L489.16 467.77A32 32 0 01464 480z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgWaveTriangle;
