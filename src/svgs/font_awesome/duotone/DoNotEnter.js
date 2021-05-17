import * as React from "react";

function SvgDoNotEnter(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M56 288v-64a16 16 0 0116-16h352a16 16 0 0116 16v64a16 16 0 01-16 16H72a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm176 296H72a16 16 0 01-16-16v-64a16 16 0 0116-16h352a16 16 0 0116 16v64a16 16 0 01-16 16z"
        className="do-not-enter_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDoNotEnter;
