import * as React from "react";

function SvgAxe(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M592 160v32c0 97.05-79 176-176 176h-32v48h32c123.71 0 224-100.29 224-224v-32zM4.69 439.43a16 16 0 000 22.63L50 507.31a16 16 0 0022.63 0l235.82-235.87-67.88-67.88zM507.31 72.57a16 16 0 000-22.63L462.06 4.69a16 16 0 00-22.63 0l-34.5 34.5 67.88 67.88z"
        opacity={0.4}
      />
      <path
        d="M384 301.74L233.37 151.11a32 32 0 010-45.25l96.49-96.49a32 32 0 0145.26 0L525.74 160H560v32c0 79.4-64.6 144-144 144h-32z"
        className="axe_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAxe;
