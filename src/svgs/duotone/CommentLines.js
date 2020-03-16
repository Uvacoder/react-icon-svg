import * as React from "react";

function SvgCommentLines(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm32 264a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm96-96a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h240a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M376 176H136a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm-96 96H136a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8z"
        className="comment-lines_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentLines;
