import * as React from "react";

function SvgFileMinus(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-88 212a12 12 0 01-12 12H100a12 12 0 01-12-12v-40a12 12 0 0112-12h184a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-93 183H100a12 12 0 00-12 12v40a12 12 0 0012 12h184a12 12 0 0012-12v-40a12 12 0 00-12-12z"
        className="file-minus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFileMinus;
