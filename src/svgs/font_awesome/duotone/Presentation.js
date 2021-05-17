import * as React from "react";

function SvgPresentation(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M480 64h64v256a32 32 0 01-32 32H64a32 32 0 01-32-32V64h64v224h384z"
        opacity={0.4}
      />
      <path
        d="M560 0H16A16 16 0 000 16v32a16 16 0 0016 16h544a16 16 0 0016-16V16a16 16 0 00-16-16zM320 386.75V352h-64v34.75l-75.31 75.31a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0L288 445.25l62.06 62.06a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63z"
        className="presentation_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPresentation;
