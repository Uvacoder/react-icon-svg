import * as React from "react";

function SvgHatChef(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M416 32a95.17 95.17 0 00-57.73 19.74C334.93 20.5 298 0 256 0s-78.93 20.5-102.27 51.74A95.56 95.56 0 000 128c0 41.74 64 192 64 192h60.09L112 169.25a8 8 0 017.33-8.61l16-1.28a8 8 0 018.61 7.34L156.2 320h83.14V168a8 8 0 018-8h16a8 8 0 018 8v152h84.46l12.27-153.3a8 8 0 018.61-7.34l16 1.28a8 8 0 017.33 8.61L387.91 320H448s64-150.26 64-192a96 96 0 00-96-96z"
        opacity={0.4}
      />
      <path
        d="M64 480a32 32 0 0032 32h320a32 32 0 0032-32V352H64z"
        className="hat-chef_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHatChef;
