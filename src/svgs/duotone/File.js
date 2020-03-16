import * as React from "react";

function SvgFile(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M256 0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128H272a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M384 121.9v6.1H272a16 16 0 01-16-16V0h6.1a24 24 0 0117 7l97.9 98a23.9 23.9 0 017 16.9z"
        className="file_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFile;
