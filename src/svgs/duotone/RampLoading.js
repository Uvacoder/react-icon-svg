import * as React from "react";

function SvgRampLoading(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M355.4 383.3L321 314.5a13 13 0 00-1-1.5V64H64v249c-.3.5-.7.9-1 1.5l-34.4 68.8C12.6 381.5 0 368.5 0 352V32A32 32 0 0132 0h320a32 32 0 0132 32v320c0 16.4-12.6 29.5-28.6 31.3z"
        opacity={0.4}
      />
      <path
        d="M292.4 328.8l80 160a16 16 0 01-14.3 23.2H25.9a16 16 0 01-14.3-23.2l80-160a15.92 15.92 0 0114.3-8.8h172.2a15.92 15.92 0 0114.3 8.8z"
        className="ramp-loading_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRampLoading;
