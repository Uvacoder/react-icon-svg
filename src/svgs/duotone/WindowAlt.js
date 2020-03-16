import * as React from "react";

function SvgWindowAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M464 32H48A48 48 0 000 80v80h512V80a48 48 0 00-48-48zm-240 96a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M320 128a32 32 0 10-32-32 32 32 0 0032 32zm96 0a32 32 0 10-32-32 32 32 0 0032 32zM0 160v272a48 48 0 0048 48h416a48 48 0 0048-48V160z"
        className="window-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWindowAlt;
