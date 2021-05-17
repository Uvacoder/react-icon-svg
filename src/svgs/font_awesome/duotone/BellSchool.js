import * as React from "react";

function SvgBellSchool(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M464 320a48 48 0 00-27.14 87.55A40.07 40.07 0 01400 432h-48v48h48a88.08 88.08 0 0086-69.56A47.86 47.86 0 00464 320zM208 160a48 48 0 1048 48 48 48 0 00-48-48z"
        opacity={0.4}
      />
      <path
        d="M208 0C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0zm0 288a80 80 0 1180-80 80.09 80.09 0 01-80 80zM64 399.54V480a32 32 0 0032 32h224a32 32 0 0032-32v-80.46a238.18 238.18 0 01-288 0z"
        className="bell-school_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBellSchool;
