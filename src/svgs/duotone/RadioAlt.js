import * as React from "react";

function SvgRadioAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 128H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zM224 424a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm32-64a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8zm112 104a80 80 0 1180-80 80 80 0 01-80 80zm80-208H64v-64h384z"
        opacity={0.4}
      />
      <path
        d="M511.4 27.05l-4.33-15.38A16 16 0 00487.33.6L64 128h147.5l288.83-81.21a16 16 0 0011.07-19.74zM64 256h384v-64H64zm304 48a80 80 0 1080 80 80 80 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z"
        className="radio-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRadioAlt;
