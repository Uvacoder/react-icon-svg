import * as React from "react";

function SvgUnderline(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M432 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H272a16 16 0 00-16 16v32a16 16 0 0016 16h32v160a80 80 0 01-160 0V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H32a16 16 0 00-16 16v32a16 16 0 0016 16z"
        className="underline_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUnderline;
