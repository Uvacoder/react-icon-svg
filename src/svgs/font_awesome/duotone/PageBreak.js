import * as React from "react";

function SvgPageBreak(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M160 64h176v64a16 16 0 0016 16h64v64h64v-76.06a48.16 48.16 0 00-14.09-34L382 14.09A48 48 0 00348.09 0H144a48.14 48.14 0 00-48 48.07V208h64zm256 384H160v-80H96v96a48 48 0 0048 48h288a48 48 0 0048-48v-96h-64z"
        opacity={0.4}
      />
      <path
        d="M243.6 256a19.59 19.59 0 00-19.6 19.6v24.8a19.59 19.59 0 0019.6 19.6h88.8a19.59 19.59 0 0019.6-19.6v-24.8a19.59 19.59 0 00-19.6-19.6zm316.4 0H432a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zm-400 48v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16z"
        className="page-break_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPageBreak;
