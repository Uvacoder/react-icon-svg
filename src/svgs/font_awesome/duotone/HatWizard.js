import * as React from "react";

function SvgHatWizard(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M240 416h208l-86.41-201.63a64 64 0 01-1.89-45.45L416 0 228.42 107.19A128 128 0 00175 166.34L64 416h144l-16-32-64-32 64-32 32-64 32 64 64 32-64 32zm48-224l-16 32-16-32-32-16 32-16 16-32 16 32 32 16z"
        className="hat-wizard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHatWizard;
