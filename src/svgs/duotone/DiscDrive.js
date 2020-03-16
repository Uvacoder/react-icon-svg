import * as React from "react";

function SvgDiscDrive(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 96a160 160 0 10160 160A160 160 0 00256 96zm0 192a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M496 416h-16V96a64 64 0 00-64-64H96a64 64 0 00-64 64v320H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-240 0a160 160 0 11160-160 160 160 0 01-160 160z"
        className="disc-drive_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDiscDrive;
