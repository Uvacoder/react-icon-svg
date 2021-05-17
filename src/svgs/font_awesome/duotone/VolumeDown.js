import * as React from "react";

function SvgVolumeDown(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M0 328V184a24 24 0 0124-24h102.06l89-89c15-15 41-4.49 41 17v336c0 21.44-25.94 32-41 17l-89-88.95H24A24 24 0 010 328z"
        opacity={0.4}
      />
      <path
        d="M305.62 188.57a24.08 24.08 0 0132.61-9.45 87.44 87.44 0 010 153.75 24 24 0 11-23.16-42.06 39.43 39.43 0 000-69.63 24 24 0 01-9.45-32.61z"
        className="volume-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVolumeDown;
