import * as React from "react";

function SvgShredder(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 96v128H64V32A32 32 0 0196 0h256v80a16 16 0 0016 16zM232 416h48v80a16 16 0 01-16 16h-16a16 16 0 01-16-16zm-96 0h48v80a16 16 0 01-16 16h-16a16 16 0 01-16-16zm-96 0h48v80a16 16 0 01-16 16H56a16 16 0 01-16-16zm288 0h48v80a16 16 0 01-16 16h-16a16 16 0 01-16-16zm96 0h48v80a16 16 0 01-16 16h-16a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M368 96h80v-4.58a17.92 17.92 0 00-5.25-12.67l-73.43-73.5A18 18 0 00356.57 0H352v80a16 16 0 0016 16zm80 96v32H64v-32a64 64 0 00-64 64v112a16 16 0 0016 16h480a16 16 0 0016-16V256a64 64 0 00-64-64zm-16 136a24 24 0 1124-24 24 24 0 01-24 24z"
        className="shredder_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShredder;
