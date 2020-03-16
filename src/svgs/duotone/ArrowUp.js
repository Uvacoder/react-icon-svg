import * as React from "react";

function SvgArrowUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M183 456V169.6l41-41.6 41 41.59V456c0 13.3-11 24-24.63 24h-32.82A24.22 24.22 0 01183 456z"
        opacity={0.4}
      />
      <path
        d="M6.52 233.69c.23-.24.47-.48.71-.71L206.56 39a25 25 0 0134.78 0l199.43 194a23.38 23.38 0 01.7 33.11c-.22.24-.46.47-.7.7L418 288.94a25.13 25.13 0 01-35.18-.4L224 127.81 65.2 288.54a24.94 24.94 0 01-35.18.4L7.23 266.79a23.38 23.38 0 01-.71-33.1z"
        className="arrow-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowUp;
