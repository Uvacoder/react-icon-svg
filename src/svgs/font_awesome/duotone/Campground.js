import * as React from "react";

function SvgCampground(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h608a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M40.68 448l239.79-330.25-53.41-73.55a16 16 0 013.54-22.35l25.88-18.8a16 16 0 0122.35 3.55L320 63.3l41.16-56.69a16 16 0 0122.35-3.55l25.9 18.79A16 16 0 01413 44.2l-53.41 73.55L599.32 448h-163L320 288 203.64 448z"
        className="campground_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCampground;
