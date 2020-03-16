import * as React from "react";

function SvgMapMarkerMinus(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm112 200a16 16 0 01-16 16H96a16 16 0 01-16-16v-16a16 16 0 0116-16h192a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M304 184v16a16 16 0 01-16 16H96a16 16 0 01-16-16v-16a16 16 0 0116-16h192a16 16 0 0116 16z"
        className="map-marker-minus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMapMarkerMinus;
