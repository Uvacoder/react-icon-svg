import * as React from "react";

function SvgFlushed(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM80 224a72 72 0 1172 72 72 72 0 01-72-72zm232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-104a72 72 0 1172-72 72 72 0 01-72 72z"
        opacity={0.4}
      />
      <path
        d="M152 200a23.94 23.94 0 10.12 0zm192 0a23.94 23.94 0 10.12 0z"
        className="flushed_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlushed;
