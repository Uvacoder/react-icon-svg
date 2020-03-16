import * as React from "react";

function SvgChevronDoubleDown(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M207 285.54L12.7 91.14a23.9 23.9 0 010-33.9l22.7-22.7a24.08 24.08 0 0133.9 0l154.7 154 154.7-154a23.9 23.9 0 0133.9 0l22.7 22.7a23.9 23.9 0 010 33.9L241 285.54a24.2 24.2 0 01-34 0z"
        opacity={0.4}
      />
      <path
        d="M207 477.54L12.7 283.14a23.9 23.9 0 010-33.9l22.7-22.7a23.9 23.9 0 0133.9 0l154.7 154 154.7-154a24.08 24.08 0 0133.9 0l22.7 22.7a23.9 23.9 0 010 33.9L241 477.54a24.2 24.2 0 01-34 0z"
        className="chevron-double-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronDoubleDown;
