import * as React from "react";

function SvgCandleHolder(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M160 192c45.93 0 78-32.61 78-79.29 0-30-32.59-74.89-78-112.71-45.62 38-78 82.84-78 112.71 0 46.68 32.07 79.29 78 79.29zm216 176a72.08 72.08 0 00-72 72 71.11 71.11 0 004.42 24H16a16 16 0 00-16 16v16a16 16 0 0016 16h360a72 72 0 000-144zm0 96a24 24 0 1124-24 24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M256 256v208H64V256a32 32 0 0132-32h32v48a16 16 0 0032 0v-48h64a32 32 0 0132 32z"
        className="candle-holder_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCandleHolder;
