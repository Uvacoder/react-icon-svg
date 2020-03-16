import * as React from "react";

function SvgMapMarkerExclamation(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 336a32 32 0 1132-32 32 32 0 01-32 32zm38.24-238.41l-12.8 128A16 16 0 01201.52 240h-19a16 16 0 01-15.92-14.41l-12.8-128A16 16 0 01169.68 80h44.64a16 16 0 0115.92 17.59z"
        opacity={0.4}
      />
      <path
        d="M192 272a32 32 0 1032 32 32 32 0 00-32-32zm22.32-192h-44.64a16 16 0 00-15.92 17.59l12.8 128A16 16 0 00182.48 240h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00214.32 80z"
        className="map-marker-exclamation_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapMarkerExclamation;
