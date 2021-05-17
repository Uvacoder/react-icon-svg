import * as React from "react";

function SvgFileExclamation(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-219.2 80h55.23a12 12 0 0111.17 12.8l-7.2 112a12 12 0 01-12 11.2h-40a12 12 0 01-12-11.2l-7.2-112v-.83a12 12 0 0112-11.97zM192 440a40 40 0 1140-40 40 40 0 01-40 40z"
        opacity={0.4}
      />
      <path
        d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM160 332.8a12 12 0 0012 11.2h40a12 12 0 0012-11.2l7.2-112A12 12 0 00220 208h-55.2a12 12 0 00-12 12v.83zm32 27.2a40 40 0 1040 40 40 40 0 00-40-40z"
        className="file-exclamation_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFileExclamation;
