import * as React from "react";

function SvgCompressWide(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M500 160h-84V76a12 12 0 00-12-12h-40a12 12 0 00-12 12v124a23.94 23.94 0 0024 24h124a12 12 0 0012-12v-40a12 12 0 00-12-12zM136 288H12a12 12 0 00-12 12v40a12 12 0 0012 12h84v84a12 12 0 0012 12h40a12 12 0 0012-12V312a23.94 23.94 0 00-24-24z"
        opacity={0.4}
      />
      <path
        d="M500 288H376a23.94 23.94 0 00-24 24v124a12 12 0 0012 12h40a12 12 0 0012-12v-84h84a12 12 0 0012-12v-40a12 12 0 00-12-12zM148 64h-40a12 12 0 00-12 12v84H12a12 12 0 00-12 12v40a12 12 0 0012 12h124a23.94 23.94 0 0024-24V76a12 12 0 00-12-12z"
        className="compress-wide_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCompressWide;
