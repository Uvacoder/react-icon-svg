import * as React from "react";

function SvgArchway(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M576 16v32a16 16 0 01-16 16H16A16 16 0 010 48V16A16 16 0 0116 0h544a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M576 464v32a16 16 0 01-16 16H400a16 16 0 01-16-16V320a96 96 0 00-192 0v176a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h16V96h512v352h16a16 16 0 0116 16z"
        className="archway_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArchway;
