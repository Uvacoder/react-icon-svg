import * as React from "react";

function SvgMapMarker(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 192c0 77.41-27 99-172.27 309.67a24 24 0 01-39.46 0C27 291 0 269.41 0 192 0 86 86 0 192 0s192 86 192 192z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgMapMarker;
