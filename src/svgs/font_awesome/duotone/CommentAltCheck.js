import * as React from "react";

function SvgCommentAltCheck(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zm-77.9 163.8l-131 130a11 11 0 01-15.6-.1l-75.7-76.3a11 11 0 01.1-15.6l26-25.8a11 11 0 0115.6.1l42.1 42.5 97.2-96.4a11 11 0 0115.6.1l25.8 26a11 11 0 01-.1 15.5z"
        opacity={0.4}
      />
      <path
        d="M370.1 163.8l-131 130a11 11 0 01-15.6-.1l-75.7-76.3a11 11 0 01.1-15.6l26-25.8a11 11 0 0115.6.1l42.1 42.5 97.2-96.4a11 11 0 0115.6.1l25.8 26a11 11 0 01-.1 15.5z"
        className="comment-alt-check_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCommentAltCheck;
