import * as React from "react";

function SvgSkeleton(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M224 224H16a16 16 0 01-16-16v-32a16 16 0 0116-16h208zM80 128h144V64H80a16 16 0 00-16 16v32a16 16 0 0016 16zm208 0h144a16 16 0 0016-16V80a16 16 0 00-16-16H288zm160 176v-32a16 16 0 00-16-16H288v64h144a16 16 0 0016-16zm32 128a80 80 0 11-158.39-16H190.39A80 80 0 11112 352h288a80 80 0 0180 80zm-336 0a32 32 0 10-32 32 32 32 0 0032-32zm288 0a32 32 0 10-32 32 32 32 0 0032-32zM64 272v32a16 16 0 0016 16h144v-64H80a16 16 0 00-16 16zm432-112H288v64h208a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M224 16a16 16 0 0116-16h32a16 16 0 0116 16v336h-64z"
        className="skeleton_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSkeleton;
