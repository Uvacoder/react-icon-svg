import * as React from "react";

function SvgHeadSide(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75A208 208 0 00266.09 0H192C86 0 0 86 0 192a191.28 191.28 0 0064 142.82V512h256v-64h64a64 64 0 0064-64v-64h32a32 32 0 0029.21-45zM320 224a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M320 224a32 32 0 1132-32 32 32 0 01-32 32z"
        className="head-side_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHeadSide;
