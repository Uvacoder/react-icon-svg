import * as React from "react";

function SvgYinYang(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248a124 124 0 010-248 124 124 0 000-248zm0 152a32 32 0 1132-32 32 32 0 01-32 32zm0 192a32 32 0 1032 32 32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M248 160a32 32 0 10-32-32 32 32 0 0032 32zm0-152a124 124 0 010 248 124 124 0 000 248c137 0 248-111 248-248S385 8 248 8zm0 408a32 32 0 1132-32 32 32 0 01-32 32z"
        className="yin-yang_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgYinYang;
