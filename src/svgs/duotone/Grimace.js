import * as React from "react";

function SvgGrimace(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM144 400h-8a32 32 0 01-32-32v-8h40zm0-56h-40v-8a32 32 0 0132-32h8zm-8-136a32 32 0 1132 32 32 32 0 01-32-32zm72 192h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm-8-104a32 32 0 1132-32 32 32 0 01-32 32zm64 128a32 32 0 01-32 32h-8v-40h40zm0-24h-40v-40h8a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="grimace_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGrimace;
