import * as React from "react";

function SvgPoundSign(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M8 236v40a12 12 0 0012 12h28v-64H20a12 12 0 00-12 12zm204-12h-84v64h84a12 12 0 0012-12v-40a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M48 416V158c0-73.26 58-126 139.93-126 48.65 0 85.19 22.56 101.58 34.93a12 12 0 012.31 16.81 2.56 2.56 0 01-.2.26l-28.49 35.51a12 12 0 01-15.69 2.69c-11.77-7.35-34-18.85-57.65-18.85-37.23 0-61.79 24.82-61.79 57.08v254.42h122.51V364a12 12 0 0112-12H308a12 12 0 0112 12v104a12 12 0 01-12 12H12a12 12 0 01-12-12v-40a12 12 0 0112-12z"
        className="pound-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPoundSign;
