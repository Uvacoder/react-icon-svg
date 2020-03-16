import * as React from "react";

function SvgBoxFragile(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-96 160c0 47.5-34.6 86.7-80 94.4V384h40a8 8 0 018 8v16a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h40v-97.6a95.78 95.78 0 01-80-94.4v-80a16 16 0 0116-16h160a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M320 192c0 47.5-34.6 86.7-80 94.4V384h40a8 8 0 018 8v16a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h40v-97.6a95.78 95.78 0 01-80-94.4v-80a16 16 0 0116-16h60.4l24.5 27.6-64 32 91 68.4-37-59.6 64-32L260.1 96H304a16 16 0 0116 16z"
        className="box-fragile_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxFragile;
