import * as React from "react";

function SvgNotEqual(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M35.59 466.83a16 16 0 003 22.42L64 508.75a16 16 0 0022.43-3L168.52 400h-81zM162 304h81l74.51-96h-81zM441 22.78L415.61 3.29a16 16 0 00-22.43 3L311.11 112h81L444 45.21a16 16 0 00-3-22.43z"
        opacity={0.4}
      />
      <path
        d="M416 304H32a32 32 0 00-32 32v32a32 32 0 0032 32h384a32 32 0 0032-32v-32a32 32 0 00-32-32zm0-192H32a32 32 0 00-32 32v32a32 32 0 0032 32h384a32 32 0 0032-32v-32a32 32 0 00-32-32z"
        className="not-equal_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgNotEqual;
