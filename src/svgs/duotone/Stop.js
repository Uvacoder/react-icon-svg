import * as React from "react";

function SvgStop(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 352a32 32 0 01-32 32H96a32 32 0 01-32-32V128a32 32 0 0132-32h256a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M64 384V128a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H96a32 32 0 01-32-32z"
        className="stop_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStop;
