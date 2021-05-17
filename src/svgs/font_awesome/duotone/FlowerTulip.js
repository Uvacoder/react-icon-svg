import * as React from "react";

function SvgFlowerTulip(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M511.94 336.84C502 435 405.58 512 288.18 512h-64.34C106.44 512 10.07 435 .08 336.84-.86 327.72 7 320 16.14 320H63.4c63 0 119.82 22.23 160.61 57.92V256h64v121.92C328.8 342.23 385.62 320 448.62 320h47.26c9.19 0 16.98 7.72 16.06 16.84z"
        opacity={0.4}
      />
      <path
        d="M224 256A128 128 0 0196 128V32l80 48 81.15-80L336 80l80-48v96a128 128 0 01-128 128z"
        className="flower-tulip_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlowerTulip;
