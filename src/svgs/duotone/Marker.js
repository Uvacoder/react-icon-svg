import * as React from "react";

function SvgMarker(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M169.36 214.63l128 128L222 418.05a327 327 0 01-195.34 93.8A24 24 0 01.15 485.34v-.23A327 327 0 0194 290z"
        opacity={0.4}
      />
      <path
        d="M485.5 154.53L320 320 192 192l98.48-98.47-19.6-19.59-87.15 87.15a16 16 0 01-22.63 0l-22.62-22.62a16 16 0 010-22.63L242.6 11.72a40 40 0 0156.56 0l36.56 36.55 21.76-21.76a90.52 90.52 0 01128 128z"
        className="marker_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMarker;
