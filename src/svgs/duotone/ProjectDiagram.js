import * as React from "react";

function SvgProjectDiagram(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M416 128H164.65l91.63 160H256a63.79 63.79 0 00-55.12 32L54.78 64H416z"
        opacity={0.4}
      />
      <path
        d="M384 320H256a32 32 0 00-32 32v128a32 32 0 0032 32h128a32 32 0 0032-32V352a32 32 0 00-32-32zM160 0H32A32 32 0 000 32v128a32 32 0 0032 32h128a32 32 0 0032-32V32a32 32 0 00-32-32zm448 0H480a32 32 0 00-32 32v128a32 32 0 0032 32h128a32 32 0 0032-32V32a32 32 0 00-32-32z"
        className="project-diagram_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgProjectDiagram;
