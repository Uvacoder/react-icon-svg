import * as React from "react";

function SvgMap(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path d="M192 32l192 64v384l-192-64z" opacity={0.4} />
      <path
        d="M0 117.66V464a16 16 0 0021.94 14.86L160 416V32L20.12 88A32 32 0 000 117.66zm554.06-84.5L416 96v384l139.88-55.95A32 32 0 00576 394.34V48a16 16 0 00-21.94-14.84z"
        className="map_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMap;
