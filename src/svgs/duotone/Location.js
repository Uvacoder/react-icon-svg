import * as React from "react";

function SvgLocation(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M344 256a88 88 0 11-88-88 88 88 0 0188 88z" opacity={0.4} />
      <path
        d="M496 224h-50.88A191.86 191.86 0 00288 66.88V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v50.88A191.86 191.86 0 0066.88 224H16a16 16 0 00-16 16v32a16 16 0 0016 16h50.88A191.86 191.86 0 00224 445.12V496a16 16 0 0016 16h32a16 16 0 0016-16v-50.88A191.86 191.86 0 00445.12 288H496a16 16 0 0016-16v-32a16 16 0 00-16-16zM256 384a128 128 0 11128-128 128 128 0 01-128 128z"
        className="location_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLocation;
