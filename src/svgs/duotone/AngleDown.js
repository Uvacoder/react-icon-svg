import * as React from "react";

function SvgAngleDown(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77 0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94 0 0133.85 0z"
        opacity={0.4}
      />
      <path
        d="M313 182.57L290.21 160a23.94 23.94 0 00-33.85 0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78 0 00-.18-33.62z"
        className="angle-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAngleDown;
