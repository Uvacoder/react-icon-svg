import * as React from "react";

function SvgHandHoldingBox(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M352 128V0H224v128l64-32zm213.3 200.1c-11.8-10.7-30.2-10-42.6 0L430.3 402a63.67 63.67 0 01-40 14H272a16 16 0 010-32h78.3c15.9 0 30.7-10.9 33.3-26.6A32 32 0 00352 320H192a117.69 117.69 0 00-74.1 26.3L71.4 384H16a16 16 0 00-16 16v96a16 16 0 0016 16h356.8a64.08 64.08 0 0040-14L564 377a32 32 0 001.3-48.9z"
        opacity={0.4}
      />
      <path
        d="M480 16v224a16 16 0 01-16 16H112a16 16 0 01-16-16V16a16 16 0 0116-16h112v128l64-32 64 32V0h112a16 16 0 0116 16z"
        className="hand-holding-box_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHandHoldingBox;
