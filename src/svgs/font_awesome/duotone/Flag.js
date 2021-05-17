import * as React from "react";

function SvgFlag(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 91.33v277c0 11.31-7.1 21.88-18.5 26.47C317.7 465 281.7 331.25 96 416V102a56.57 56.57 0 0014.64-15c194.19-74.48 184.75 58.25 352-20.08C485.2 56.31 512 68.26 512 91.33z"
        opacity={0.4}
      />
      <path
        d="M120 56a55.93 55.93 0 01-24 46v388a22 22 0 01-22 22H54a22 22 0 01-22-22V102a56 56 0 1188-46z"
        className="flag_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlag;
