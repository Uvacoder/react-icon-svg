import * as React from "react";

function SvgItalic(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M208 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm96-384H112a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16V48a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M158.75 96h82.5l-80 320h-82.5z"
        className="italic_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgItalic;
