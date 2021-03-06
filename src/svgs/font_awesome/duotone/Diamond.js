import * as React from "react";

function SvgDiamond(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M442.14 240.34l-200-232a24 24 0 00-36.36 0l-200 232a23.84 23.84 0 000 31.3l200 232a24 24 0 0036.36 0l200-232a23.84 23.84 0 000-31.3zm-94.05 26l-111.9 128.15a16.23 16.23 0 01-24.38 0L99.91 266.38a15.74 15.74 0 010-20.76l111.9-128.11a16.23 16.23 0 0124.38 0l111.9 128.11a15.74 15.74 0 010 20.76z"
        opacity={0.4}
      />
      <path
        d="M348.09 245.62a15.74 15.74 0 010 20.76l-111.9 128.11a16.23 16.23 0 01-24.38 0L99.91 266.38a15.74 15.74 0 010-20.76l111.9-128.11a16.23 16.23 0 0124.38 0z"
        className="diamond_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDiamond;
