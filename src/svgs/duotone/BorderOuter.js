import * as React from "react";

function SvgBorderOuter(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M208 288h32a16 16 0 0016-16v-32a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm96 0h32a16 16 0 0016-16v-32a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16v-32a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm96 96h32a16 16 0 0016-16v-32a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm0-192h32a16 16 0 0016-16v-32a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16z"
        opacity={0.4}
      />
      <path
        d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 384H64V96h320z"
        className="border-outer_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBorderOuter;
