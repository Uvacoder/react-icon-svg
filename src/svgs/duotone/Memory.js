import * as React from "react";

function SvgMemory(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 130.94V96a32 32 0 00-32-32H32A32 32 0 000 96v34.94A47.86 47.86 0 0132 176a47.86 47.86 0 01-32 45.06V320h640v-98.94a47.73 47.73 0 010-90.12zM224 256h-64V128h64zm128 0h-64V128h64zm128 0h-64V128h64z"
        opacity={0.4}
      />
      <path
        d="M224 128h-64v128h64zm128 0h-64v128h64zm128 0h-64v128h64zM0 352v96h64v-26.67a16 16 0 0132 0V448h128v-26.67a16 16 0 1132 0V448h128v-26.67a16 16 0 1132 0V448h128v-26.67a16 16 0 1132 0V448h64v-96z"
        className="memory_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMemory;
