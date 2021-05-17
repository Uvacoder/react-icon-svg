import * as React from "react";

function SvgAcorn(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M32 256h384a258.87 258.87 0 01-143.11 231.55L224 512l-48.89-24.45A258.87 258.87 0 0132 256z"
        opacity={0.4}
      />
      <path
        d="M448 160v32a32 32 0 01-32 32H32a32 32 0 01-32-32v-32a96 96 0 0196-96h106a132.41 132.41 0 0129.41-58.64 15.7 15.7 0 0111.31-5.3 15.44 15.44 0 0112 4.72L266 16.1a16 16 0 01.66 21.9 84.32 84.32 0 00-15.16 26H352a96 96 0 0196 96z"
        className="acorn_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAcorn;
