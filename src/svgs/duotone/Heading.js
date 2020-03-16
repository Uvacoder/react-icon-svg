import * as React from "react";

function SvgHeading(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480 32H320a16 16 0 00-16 16v32a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16zm-288 0H32a16 16 0 00-16 16v32a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16zm0 384H32a16 16 0 00-16 16v32a16 16 0 0016 16h160a16 16 0 0016-16v-32a16 16 0 00-16-16zm288 0H320a16 16 0 00-16 16v32a16 16 0 0016 16h160a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M352 96h96v320h-96V288H160v128H64V96h96v128h192z"
        className="heading_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHeading;
