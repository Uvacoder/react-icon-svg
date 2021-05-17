import * as React from "react";

function SvgChevronCircleUp(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm152.5 303.5l-17 17a23.9 23.9 0 01-33.9 0L256 226.9 154.4 328.5a23.9 23.9 0 01-33.9 0l-17-17a23.9 23.9 0 010-33.9L239 142.1a24 24 0 0134 0l135.5 135.5a23.9 23.9 0 010 33.9z"
        opacity={0.4}
      />
      <path
        d="M273 142.1l135.5 135.5a23.9 23.9 0 010 33.9l-17 17a23.9 23.9 0 01-33.9 0L256 226.9 154.4 328.5a23.9 23.9 0 01-33.9 0l-17-17a23.9 23.9 0 010-33.9L239 142.1a24 24 0 0134 0z"
        className="chevron-circle-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChevronCircleUp;
