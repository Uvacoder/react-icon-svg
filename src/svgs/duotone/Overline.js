import * as React from "react";

function SvgOverline(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M432 0H16A16 16 0 000 16v32a16 16 0 0016 16h416a16 16 0 0016-16V16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M232.19 128h-16.38A167.81 167.81 0 0048 295.81v48.38A167.81 167.81 0 00215.81 512h16.38A167.81 167.81 0 00400 344.19v-48.38A167.81 167.81 0 00232.19 128zM320 344.19A87.91 87.91 0 01232.19 432h-16.38A87.91 87.91 0 01128 344.19v-48.38A87.91 87.91 0 01215.81 208h16.38A87.91 87.91 0 01320 295.81z"
        className="overline_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgOverline;
