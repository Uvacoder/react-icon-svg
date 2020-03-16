import * as React from "react";

function SvgTimes(props) {
  return (
    <svg viewBox="0 0 352 512" {...props}>
      <path
        d="M9.21 356.07a31.46 31.46 0 000 44.48l22.24 22.24a31.46 31.46 0 0044.48 0L176 322.72 109.28 256zm333.58-244.62l-22.24-22.24a31.46 31.46 0 00-44.48 0L176 189.28 242.72 256l100.07-100.07a31.46 31.46 0 000-44.48z"
        opacity={0.4}
      />
      <path
        d="M342.79 356.07a31.46 31.46 0 010 44.48l-22.24 22.24a31.46 31.46 0 01-44.48 0L9.21 155.93a31.46 31.46 0 010-44.48l22.24-22.24a31.46 31.46 0 0144.48 0z"
        className="times_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTimes;
