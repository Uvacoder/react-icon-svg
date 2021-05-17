import * as React from "react";

function SvgCommentAltDots(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM128 240a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M384 176a32 32 0 1032 32 32 32 0 00-32-32zm-128 0a32 32 0 1032 32 32 32 0 00-32-32zm-128 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="comment-alt-dots_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentAltDots;
