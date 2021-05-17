import * as React from "react";

function SvgCurling(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M0 416a96 96 0 0096 96h448a96 96 0 0096-96v-32H0zm544-176H96a96 96 0 00-96 96v16h640v-16a96 96 0 00-96-96z"
        opacity={0.4}
      />
      <path
        d="M554.1 192H85.9c13.2-37.2 48.4-64 90.1-64h48v-16A111.94 111.94 0 01336 0h128a16 16 0 0116 16v32a16 16 0 01-16 16c-117.7 0-176-11.4-176 48v16h176c41.7 0 76.9 26.8 90.1 64z"
        className="curling_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCurling;
