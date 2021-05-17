import * as React from "react";

function SvgMapMarkerSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M157.4 89.88A191.85 191.85 0 01320 0c106 0 192 86 192 192 0 46.83-9.88 73.25-49.83 133.43zM300.8 502.4a24 24 0 0038.4 0c18.6-26.69 35.23-50.32 50.14-71.47L131.47 231.62c10.71 52.55 50.15 99.78 169.33 270.78z"
        opacity={0.4}
      />
      <path
        d="M3.37 31.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45z"
        className="map-marker-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapMarkerSlash;
