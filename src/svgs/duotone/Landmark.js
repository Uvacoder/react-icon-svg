import * as React from "react";

function SvgLandmark(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M496 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-16-80a16 16 0 00-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64v160H48a16 16 0 00-16 16v48h448z"
        opacity={0.4}
      />
      <path
        d="M10.38 92.11L244.77 2a32 32 0 0122.47 0l234.38 90.11a16 16 0 0110.38 15V144a16 16 0 01-16 16H16a16 16 0 01-16-16v-36.91a16 16 0 0110.38-14.98z"
        className="landmark_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLandmark;
