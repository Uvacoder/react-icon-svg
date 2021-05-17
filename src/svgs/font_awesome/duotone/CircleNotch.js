import * as React from "react";

function SvgCircleNotch(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M504 257.28v.23C503.42 394 392.44 504.24 256 504v-64a184.09 184.09 0 00177.16-134.42c27.44-97.84-29.63-199.41-127.47-226.85A24 24 0 01288 55.66V39a24 24 0 0130-23.22c107.4 27.65 186.61 125.38 186 241.5z"
        opacity={0.4}
      />
      <path
        d="M256 439.93v64C119.56 504.24 8.58 394 8 257.51v-.23C7.39 141.16 86.6 43.43 194 15.78A24 24 0 01224 39v16.66a24 24 0 01-17.69 23.07c-97.84 27.44-154.91 129-127.47 226.85A184.07 184.07 0 00256 439.93z"
        className="circle-notch_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCircleNotch;
