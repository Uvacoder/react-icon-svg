import * as React from "react";

function SvgLongArrowUp(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M196 160.11V456a24 24 0 01-24 24h-24a24 24 0 01-24-24V160.11l36-35.66z"
        opacity={0.4}
      />
      <path
        d="M7 174.58L142.52 39l.06-.06a25.23 25.23 0 0134.84 0l.06.06L313 174.58a24 24 0 010 33.94l-17 17a24 24 0 01-33.94 0L160 124.45 58 225.52a24 24 0 01-33.94 0l-17-17A24 24 0 017 174.58z"
        className="long-arrow-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLongArrowUp;
