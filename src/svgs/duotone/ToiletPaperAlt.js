import * as React from "react";

function SvgToiletPaperAlt(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M480 0c-53 0-96 86-96 192v172.07c0 53.65-11.88 87.57-24.71 126.05A32 32 0 01328.92 512H16A16 16 0 01.82 490.94C22.19 426.84 32 405.19 32 364.07V192C32 86 75 0 128 0z"
        opacity={0.4}
      />
      <path
        d="M480 0c-53 0-96 86-96 192s43 192 96 192 96-86 96-192S533 0 480 0zm0 256c-17.67 0-32-28.65-32-64s14.33-64 32-64 32 28.65 32 64-14.34 64-32 64z"
        className="toilet-paper-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgToiletPaperAlt;
