import * as React from "react";

function SvgCheckCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm155.31 195.31l-184 184a16 16 0 01-22.62 0l-104-104a16 16 0 010-22.62l22.62-22.63a16 16 0 0122.63 0L216 308.12l150.06-150.06a16 16 0 0122.63 0l22.62 22.63a16 16 0 010 22.62z"
        opacity={0.4}
      />
      <path
        d="M227.31 387.31a16 16 0 01-22.62 0l-104-104a16 16 0 010-22.62l22.62-22.63a16 16 0 0122.63 0L216 308.12l150.06-150.06a16 16 0 0122.63 0l22.62 22.63a16 16 0 010 22.62l-184 184z"
        className="check-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheckCircle;
