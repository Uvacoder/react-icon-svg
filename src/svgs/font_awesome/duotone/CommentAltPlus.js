import * as React from "react";

function SvgCommentAltPlus(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zm-80 216a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M144 200a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16v16a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16z"
        className="comment-alt-plus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentAltPlus;
