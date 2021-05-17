import * as React from "react";

function SvgMapMarkerEdit(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm-43.17 283.15L106 288a9 9 0 01-10-9.95l4.8-42.83 85.54-85.54 48 48zm133.91-133.9l-28.26 28.26-48-48 28.26-28.26a18 18 0 0125.41 0l22.57 22.57a18 18 0 01.02 25.43z"
        opacity={0.4}
      />
      <path
        d="M282.74 123.84l-22.57-22.57a18 18 0 00-25.41 0l-28.26 28.26 48 48 28.26-28.26a18 18 0 00-.02-25.43zM100.85 235.17L96.05 278a9 9 0 009.95 10l42.83-4.8 85.54-85.54-48-48z"
        className="map-marker-edit_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapMarkerEdit;
