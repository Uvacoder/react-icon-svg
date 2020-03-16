import * as React from "react";

function SvgCross(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 160v64a32 32 0 01-32 32h-96v224a32 32 0 01-32 32h-64a32 32 0 01-32-32V256H32a32 32 0 01-32-32v-64a32 32 0 0132-32h96V32a32 32 0 0132-32h64a32 32 0 0132 32v96h96a32 32 0 0132 32z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgCross;
