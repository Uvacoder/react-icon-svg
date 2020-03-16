import * as React from "react";

function SvgStream(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 224v64a16 16 0 01-16 16H80a16 16 0 01-16-16v-64a16 16 0 0116-16h416a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M432 32H16A16 16 0 000 48v64a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zm0 352H16a16 16 0 00-16 16v64a16 16 0 0016 16h416a16 16 0 0016-16v-64a16 16 0 00-16-16z"
        className="stream_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStream;
