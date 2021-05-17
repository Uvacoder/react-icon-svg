import * as React from "react";

function SvgGlass(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M93.8 448L73.22 160h237.55L290.2 448z" opacity={0.4} />
      <path
        d="M317.63 64L290.2 448H93.8L66.37 64h251.26M352 0H32A32 32 0 000 32c0 .67 0 1.33.06 2l32 448A32 32 0 0064 512h256a32 32 0 0031.94-30l32-448A32 32 0 00354 .06c-.67 0-1.34-.06-2-.06z"
        className="glass_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGlass;
