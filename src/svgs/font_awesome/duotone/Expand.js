import * as React from "react";

function SvgExpand(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M148 32H24A23.94 23.94 0 000 56v124a12 12 0 0012 12h40a12 12 0 0012-12V96h84a12 12 0 0012-12V44a12 12 0 00-12-12zm288 288h-40a12 12 0 00-12 12v84h-84a12 12 0 00-12 12v40a12 12 0 0012 12h124a23.94 23.94 0 0024-24V332a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M148 416H64v-84a12 12 0 00-12-12H12a12 12 0 00-12 12v124a23.94 23.94 0 0024 24h124a12 12 0 0012-12v-40a12 12 0 00-12-12zM424 32H300a12 12 0 00-12 12v40a12 12 0 0012 12h84v84a12 12 0 0012 12h40a12 12 0 0012-12V56a23.94 23.94 0 00-24-24z"
        className="expand_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgExpand;
