import * as React from "react";

function SvgCommentAltLines(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM288 264a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm96-96a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h240a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M280 240H136a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8zm96-96H136a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8z"
        className="comment-alt-lines_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentAltLines;
