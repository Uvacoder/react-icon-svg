import * as React from "react";

function SvgMusicAlt(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M352 32v64a32 32 0 01-23 30.71l-73 21.39V17.56l54.94-16.23A32 32 0 01352 32z"
        opacity={0.4}
      />
      <path
        d="M256 432c0 44.18-50.14 80-112 80S32 476.18 32 432s50.14-80 112-80a148.76 148.76 0 0148 8V60.34a32 32 0 0122.41-30.5L256 17.56z"
        className="music-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMusicAlt;
