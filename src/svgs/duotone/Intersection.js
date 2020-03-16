import * as React from "react";

function SvgIntersection(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 224v240a16 16 0 01-16 16h-64a16 16 0 01-16-16V227.79c0-46.43-31.29-89.08-76.87-97.93A96.16 96.16 0 0096 224v240a16 16 0 01-16 16H16a16 16 0 01-16-16V230.68C0 133.11 70 46 166.74 33.62 283.83 18.6 384 109.82 384 224z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgIntersection;
