import * as React from "react";

function SvgCrosshairs(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 40C136.71 40 40 136.71 40 256s96.71 216 216 216 216-96.71 216-216S375.29 40 256 40zm107.48 323.48A152 152 0 11408 256a151 151 0 01-44.52 107.48z"
        opacity={0.4}
      />
      <path
        d="M256 224a32 32 0 1032 32 32 32 0 00-32-32zm16 128h-32a16 16 0 00-16 16v128a16 16 0 0016 16h32a16 16 0 0016-16V368a16 16 0 00-16-16zM144 224H16a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zm352 0H368a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zM272 0h-32a16 16 0 00-16 16v128a16 16 0 0016 16h32a16 16 0 0016-16V16a16 16 0 00-16-16z"
        className="crosshairs_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCrosshairs;
