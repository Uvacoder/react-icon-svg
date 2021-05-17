import * as React from "react";

function SvgSledding(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M400 128a48 48 0 10-48-48 48 48 0 0048 48zm105 292.1a23.9 23.9 0 00-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7L35 226.6a24 24 0 00-22 42.7l391.9 202.6A88.06 88.06 0 00442 480a89 89 0 0063-26 24.08 24.08 0 000-33.9z"
        opacity={0.4}
      />
      <path
        d="M384.1 288v96c0 7.5-3 14-7.2 19.4L320 374v-54H215.47l-54.77-28.3a31.93 31.93 0 011.8-15.9 30.52 30.52 0 016.9-10.4l73.4-73.4H160a32 32 0 010-64h153.5a48 48 0 0133.9 81.9L301.3 256h50.8a32 32 0 0132 32z"
        className="sledding_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSledding;
