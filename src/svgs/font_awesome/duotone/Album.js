import * as React from "react";

function SvgAlbum(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zM224 416a160 160 0 11160-160 160 160 0 01-160 160z"
        opacity={0.4}
      />
      <path
        d="M224 96a160 160 0 10160 160A160 160 0 00224 96zm0 192a32 32 0 1132-32 32 32 0 01-32 32z"
        className="album_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAlbum;
