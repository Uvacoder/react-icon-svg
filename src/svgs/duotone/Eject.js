import * as React from "react";

function SvgEject(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M448 384v64a32 32 0 01-32 32H32a32 32 0 01-32-32v-64a32 32 0 0132-32h384a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M259.38 47.56l175.94 192c28.2 30.77 6.27 80.44-35.38 80.44H48.05c-41.73 0-63.52-49.73-35.38-80.44l176-192a48 48 0 0170.71 0z"
        className="eject_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEject;
