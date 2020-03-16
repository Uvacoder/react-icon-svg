import * as React from "react";

function SvgMapMarkerAlt(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M192 0C86 0 0 86 0 192c0 77.41 27 99 172.27 309.67a24 24 0 0039.46 0C357 291 384 269.41 384 192 384 86 298 0 192 0zm0 288a96 96 0 1196-96 96 96 0 01-96 96z"
        opacity={0.4}
      />
      <path
        d="M192 256a64 64 0 1164-64 64 64 0 01-64 64z"
        className="map-marker-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapMarkerAlt;
