import * as React from "react";

function SvgVolumeOff(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M0 328V184a24 24 0 0124-24h102.06l89-89c15-15 41-4.49 41 17v336c0 21.44-25.94 32-41 17l-89-88.95H24A24 24 0 010 328z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgVolumeOff;
