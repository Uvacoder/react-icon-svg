import * as React from "react";

function SvgArchive(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M32 160v288a32 32 0 0032 32h384a32 32 0 0032-32V160zm288 84a12 12 0 01-12 12H204a12 12 0 01-12-12v-8a12 12 0 0112-12h104a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M512 64v48a16 16 0 01-16 16H16a16 16 0 01-16-16V64a32 32 0 0132-32h448a32 32 0 0132 32z"
        className="archive_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArchive;
