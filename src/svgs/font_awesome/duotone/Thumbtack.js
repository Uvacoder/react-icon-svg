import * as React from "react";

function SvgThumbtack(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 328a24 24 0 01-24 24H224V208a16 16 0 00-16-16h-32a16 16 0 00-16 16v144H24a24 24 0 01-24-24c0-50.74 37.47-91.18 86-113.73L98.21 96H56a24 24 0 01-24-24V24A24 24 0 0156 0h272a24 24 0 0124 24v48a24 24 0 01-24 24h-42.21L298 214.27c48 22.31 86 62.55 86 113.73z"
        opacity={0.4}
      />
      <path
        d="M224 208v248a8 8 0 01-.84 3.57l-24 48a8 8 0 01-14.32 0l-24-48A8 8 0 01160 456V208a16 16 0 0116-16h32a16 16 0 0116 16z"
        className="thumbtack_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgThumbtack;
