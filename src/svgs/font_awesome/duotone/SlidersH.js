import * as React from "react";

function SvgSlidersH(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M496 64H288v64h208a16 16 0 0016-16V80a16 16 0 00-16-16zM16 128h176V64H16A16 16 0 000 80v32a16 16 0 0016 16zm0 160h304v-64H16a16 16 0 00-16 16v32a16 16 0 0016 16zm480-64h-80v64h80a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 160H160v64h336a16 16 0 0016-16v-32a16 16 0 00-16-16zM0 400v32a16 16 0 0016 16h48v-64H16a16 16 0 00-16 16z"
        opacity={0.4}
      />
      <path
        d="M272 32h-32a16 16 0 00-16 16v96a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zm128 160h-32a16 16 0 00-16 16v96a16 16 0 0016 16h32a16 16 0 0016-16v-96a16 16 0 00-16-16zM144 352h-32a16 16 0 00-16 16v96a16 16 0 0016 16h32a16 16 0 0016-16v-96a16 16 0 00-16-16z"
        className="sliders-h_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSlidersH;
