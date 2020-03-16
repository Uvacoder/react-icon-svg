import * as React from "react";

function SvgTextWidth(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 48v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16H264v112h24a16 16 0 0116 16v32a16 16 0 01-16 16H160a16 16 0 01-16-16v-32a16 16 0 0116-16h24V112H64v16a16 16 0 01-16 16H16a16 16 0 01-16-16V48a16 16 0 0116-16h416a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M443.31 372.69a16 16 0 010 22.62l-80 80c-10 10-27.31 3-27.31-11.31v-48H112v48c0 15.64-18 20.64-27.31 11.31l-80-80a16 16 0 010-22.62l80-80c10-10 27.31-3 27.31 11.31v48h224v-48c0-15.64 18-20.64 27.31-11.31z"
        className="text-width_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTextWidth;
