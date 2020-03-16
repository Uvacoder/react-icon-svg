import * as React from "react";

function SvgSkiJump(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M400 96a48 48 0 10-48-48 48 48 0 0048 48zm110.7 94.2a24 24 0 00-47.4 8c3.3 19.3-6 38.9-22.1 48.1L13 466.7A24 24 0 0024.1 512a24.14 24.14 0 0011-2.7l429.2-220.9a95.42 95.42 0 0046.4-98.2z"
        opacity={0.4}
      />
      <path
        d="M113.7 414.8a31.85 31.85 0 01-7.3-35c60.4-146.9 56.8-138.9 60.2-143.3l58.9-76.5H128a32 32 0 010-64h184a40 40 0 0128.3 68.3L218.9 274.8l-44.9 109z"
        className="ski-jump_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSkiJump;
