import * as React from "react";

function SvgDumpster(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M576 240v32a16 16 0 01-16 16h-28l-20 160v16a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16H128v16a16 16 0 01-16 16H80a16 16 0 01-16-16v-16L44 288H16a16 16 0 01-16-16v-32a16 16 0 0116-16h20l-4-32h512l-4 32h20a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M24.5 44.1l-24 96A16 16 0 0016 160h97.3l25.6-128H40a16 16 0 00-15.5 12.1zM145.9 160H272V32H171.5zM304 32v128h126.1L404.5 32zm271.5 108.1l-24-96A16 16 0 00536 32h-98.9l25.6 128H560a16 16 0 0015.5-19.9z"
        className="dumpster_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDumpster;
