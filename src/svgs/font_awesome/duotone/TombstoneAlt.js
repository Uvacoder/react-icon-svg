import * as React from "react";

function SvgTombstoneAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 192v224H64V192C64 86 150 0 256 0s192 86 192 192z"
        opacity={0.4}
      />
      <path
        d="M512 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16z"
        className="tombstone-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTombstoneAlt;
