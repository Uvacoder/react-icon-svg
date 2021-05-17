import * as React from "react";

function SvgSlidersV(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M80 0H48a16 16 0 00-16 16v80h64V16A16 16 0 0080 0zm112 496a16 16 0 0016 16h32a16 16 0 0016-16v-48h-64zm-160 0a16 16 0 0016 16h32a16 16 0 0016-16V192H32zM240 0h-32a16 16 0 00-16 16v336h64V16a16 16 0 00-16-16zm112 496a16 16 0 0016 16h32a16 16 0 0016-16V320h-64zM400 0h-32a16 16 0 00-16 16v208h64V16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M112 96H16a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16zm320 128h-96a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16zM272 352h-96a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="sliders-v_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSlidersV;
