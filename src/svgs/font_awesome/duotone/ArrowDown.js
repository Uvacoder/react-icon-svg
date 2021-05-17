import * as React from "react";

function SvgArrowDown(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M265 56v286.4L224 384l-41-41.59V56c0-13.3 11-24 24.63-24h32.82A24.22 24.22 0 01265 56z"
        opacity={0.4}
      />
      <path
        d="M441.48 278.31c-.23.24-.47.48-.71.71L241.44 473a25 25 0 01-34.78 0L7.23 279a23.38 23.38 0 01-.7-33.11c.22-.24.46-.47.7-.7L30 223.06a25.13 25.13 0 0135.18.4L224 384.19l158.8-160.73a24.94 24.94 0 0135.18-.4l22.78 22.15a23.38 23.38 0 01.72 33.1z"
        className="arrow-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowDown;
