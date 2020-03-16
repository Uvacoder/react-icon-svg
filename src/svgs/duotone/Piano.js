import * as React from "react";

function SvgPiano(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 384v96a32 32 0 01-32 32H32a32 32 0 01-32-32v-96h48v80h416v-80z"
        opacity={0.4}
      />
      <path
        d="M512 327.55V384h-96v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40h-32v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40h-48v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40h-48v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40h-32v40a8 8 0 01-8 8h-16a8 8 0 01-8-8v-40H0V184.45A184.45 184.45 0 01184.45 0h15.1A184.45 184.45 0 01384 184.45a64 64 0 0035.38 57.24l57.24 28.62A64 64 0 01512 327.55z"
        className="piano_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPiano;
