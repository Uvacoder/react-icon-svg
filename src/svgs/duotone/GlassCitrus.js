import * as React from "react";

function SvgGlassCitrus(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 144c0 78.32-62.61 141.73-140.48 143.64l4.85-48.49c49-4.31 87.63-45.08 87.63-95.15a96.11 96.11 0 00-96-96c-35.37 0-66 19.45-82.64 48h-52.54C252.65 40.2 305.39 0 368 0a144 144 0 01144 144zM256 448l20.57-192H73.23L93.8 448z"
        opacity={0.4}
      />
      <path
        d="M283.43 192L256 448H93.8L66.37 192h217.06m34.37-64H32a32 32 0 00-32 32c0 .67 0 1.33.06 2l32 320A32 32 0 0064 512h221.8a32 32 0 0031.94-30l32-320a32 32 0 00-29.93-33.94c-.68 0-1.35-.06-2.01-.06z"
        className="glass-citrus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGlassCitrus;
