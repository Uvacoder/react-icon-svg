import * as React from "react";

function SvgSwatchbook(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64 256h64v-64H64zm370.66-88.29L344.5 77.36a31.83 31.83 0 00-45-.07l-.07.07L224 152.88V424l210.66-211.1a32 32 0 000-45.19zM64 128h64V64H64zm416 192H373.09L186.68 506.51c-2.06 2.07-4.5 3.58-6.68 5.49h300a32 32 0 0032-32V352a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M160 0H32A32 32 0 000 32v384a96 96 0 00192 0V32a32 32 0 00-32-32zM96 440a24 24 0 1124-24 24 24 0 01-24 24zm32-184H64v-64h64zm0-128H64V64h64z"
        className="swatchbook_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSwatchbook;
