import * as React from "react";

function SvgSleigh(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M639.9 411.7c-2.2 39-36.9 68.3-75.9 68.3H48a16 16 0 01-16-16v-16a16 16 0 0116-16h519.3a24.61 24.61 0 0015.4-43.8l-9.3-7.4a16 16 0 01-2.5-22.5l10-12.5a16 16 0 0122.5-2.5l9.3 7.4a72.06 72.06 0 0127.2 61z"
        opacity={0.4}
      />
      <path
        d="M0 64a32 32 0 0132-32h20.7A173.75 173.75 0 01208 128a173.64 173.64 0 00155.3 96H384a64.06 64.06 0 0064-64V96h96a32 32 0 010 64v96a96 96 0 01-96 96v48h-64v-48H192v48h-64v-52.5C72.9 333.2 32 283.6 32 224V96A32 32 0 010 64z"
        className="sleigh_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSleigh;
