import * as React from "react";

function SvgHeadphones(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 288v48a32 32 0 01-17.69 28.62l-14.37 7c0-1.19.06-2.38.06-3.58a111.64 111.64 0 00-32-78.37V288c0-105.87-86.13-192-192-192S64 182.13 64 288v1.63A111.64 111.64 0 0032 368c0 1.2 0 2.39.06 3.58l-14.37-7A32 32 0 010 336v-48C0 146.5 114.52 32 256 32s256 114.52 256 256z"
        opacity={0.4}
      />
      <path
        d="M168 256h-24a112 112 0 000 224h24a24 24 0 0024-24V280a24 24 0 00-24-24zm200 0h-24a24 24 0 00-24 24v176a24 24 0 0024 24h24a112 112 0 000-224z"
        className="headphones_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHeadphones;
