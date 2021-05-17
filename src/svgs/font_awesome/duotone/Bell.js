import * as React from "react";

function SvgBell(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 384c-.1 16.4-13 32-32.1 32H32.08C13 416 .09 400.4 0 384a31.25 31.25 0 018.61-21.71c19.32-20.76 55.47-52 55.47-154.29 0-77.7 54.48-139.9 127.94-155.16V32a32 32 0 1164 0v20.84C329.42 68.1 383.9 130.3 383.9 208c0 102.3 36.15 133.53 55.47 154.29A31.27 31.27 0 01448 384z"
        opacity={0.4}
      />
      <path
        d="M160 448h128a64 64 0 01-128 0z"
        className="bell_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBell;
