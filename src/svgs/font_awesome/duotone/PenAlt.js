import * as React from "react";

function SvgPenAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M498 74.17a48 48 0 010 67.91l-56.6 56.55-128-128 56.55-56.55a48 48 0 0167.91 0z"
        opacity={0.4}
      />
      <path
        d="M336 138.49l82.77 82.77L222 418.05a327 327 0 01-195.34 93.8A24 24 0 01.15 485.34v-.23A327 327 0 0194 290l151.52-151.52-22.63-22.62-101.82 101.82a16 16 0 01-22.63 0l-22.63-22.63a16 16 0 010-22.62L194.59 53.64a40 40 0 0156.56 0z"
        className="pen-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPenAlt;
