import * as React from "react";

function SvgLocationArrow(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M461.91 0a45 45 0 00-17.4 3.52L28.73 195.42c-48 22.39-32 92.75 19.19 92.75h175.91v175.91c0 30 24.21 47.94 48.74 47.94 17.3 0 34.76-8.91 44-28.75L508.48 67.49C522.06 34.89 494.14 0 461.91 0zM303.83 320V208.17H192l207.67-95.85z"
        opacity={0.4}
      />
      <path
        d="M399.68 112.32L303.83 320V208.17H192l207.67-95.85"
        className="location-arrow_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLocationArrow;
