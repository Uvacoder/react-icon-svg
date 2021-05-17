import * as React from "react";

function SvgCompress(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M436 128h-84V44a12 12 0 00-12-12h-40a12 12 0 00-12 12v124a23.94 23.94 0 0024 24h124a12 12 0 0012-12v-40a12 12 0 00-12-12zM136 320H12a12 12 0 00-12 12v40a12 12 0 0012 12h84v84a12 12 0 0012 12h40a12 12 0 0012-12V344a23.94 23.94 0 00-24-24z"
        opacity={0.4}
      />
      <path
        d="M436 320H312a23.94 23.94 0 00-24 24v124a12 12 0 0012 12h40a12 12 0 0012-12v-84h84a12 12 0 0012-12v-40a12 12 0 00-12-12zM148 32h-40a12 12 0 00-12 12v84H12a12 12 0 00-12 12v40a12 12 0 0012 12h124a23.94 23.94 0 0024-24V44a12 12 0 00-12-12z"
        className="compress_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCompress;
