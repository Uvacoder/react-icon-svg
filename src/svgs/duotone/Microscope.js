import * as React from "react";

function SvgMicroscope(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M104 384h208a8 8 0 018 8v16a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8z"
        opacity={0.4}
      />
      <path
        d="M464 448h-1.29A191 191 0 00512 320c0-105.88-86.12-192-192-192v64a128 128 0 010 256H48a48 48 0 00-48 48 16 16 0 0016 16h480a16 16 0 0016-16 48 48 0 00-48-48zM160 320h12v16a16 16 0 0016 16h40a16 16 0 0016-16v-16h12a32 32 0 0032-32V64a32 32 0 00-32-32V16a16 16 0 00-16-16h-64a16 16 0 00-16 16v16a32 32 0 00-32 32v224a32 32 0 0032 32z"
        className="microscope_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMicroscope;
