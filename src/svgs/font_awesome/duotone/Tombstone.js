import * as React from "react";

function SvgTombstone(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 192C448 86 362 0 256 0S64 86 64 192v224h384zm-96-8a16 16 0 01-16 16h-56v128a16 16 0 01-16 16h-16a16 16 0 01-16-16V200h-56a16 16 0 01-16-16v-16a16 16 0 0116-16h56v-48a16 16 0 0116-16h16a16 16 0 0116 16v48h56a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M496 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zM176 200h56v128a16 16 0 0016 16h16a16 16 0 0016-16V200h56a16 16 0 0016-16v-16a16 16 0 00-16-16h-56v-48a16 16 0 00-16-16h-16a16 16 0 00-16 16v48h-56a16 16 0 00-16 16v16a16 16 0 0016 16z"
        className="tombstone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTombstone;
