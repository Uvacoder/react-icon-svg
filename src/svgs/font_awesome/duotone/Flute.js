import * as React from "react";

function SvgFlute(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M608 176H96v160h512a32 32 0 0032-32v-96a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M320 232a24 24 0 1024 24 24 24 0 00-24-24zM0 208v96a32 32 0 0032 32h64V176H32a32 32 0 00-32 32zm416 24a24 24 0 1024 24 24 24 0 00-24-24zm96 0a24 24 0 1024 24 24 24 0 00-24-24z"
        className="flute_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFlute;
