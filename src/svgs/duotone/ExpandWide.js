import * as React from "react";

function SvgExpandWide(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M148 64H24A23.94 23.94 0 000 88v124a12 12 0 0012 12h40a12 12 0 0012-12v-84h84a12 12 0 0012-12V76a12 12 0 00-12-12zm352 224h-40a12 12 0 00-12 12v84h-84a12 12 0 00-12 12v40a12 12 0 0012 12h124a23.94 23.94 0 0024-24V300a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M148 384H64v-84a12 12 0 00-12-12H12a12 12 0 00-12 12v124a23.94 23.94 0 0024 24h124a12 12 0 0012-12v-40a12 12 0 00-12-12zM488 64H364a12 12 0 00-12 12v40a12 12 0 0012 12h84v84a12 12 0 0012 12h40a12 12 0 0012-12V88a23.94 23.94 0 00-24-24z"
        className="expand-wide_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgExpandWide;
