import * as React from "react";

function SvgVideo(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M525.6 410.2L416 334.7V177.3l109.6-75.6c21.3-14.6 50.4.4 50.4 25.8v256.9c0 25.5-29.2 40.4-50.4 25.8z"
        opacity={0.4}
      />
      <path
        d="M0 400.2V111.8A47.8 47.8 0 0147.8 64h288.4a47.8 47.8 0 0147.8 47.8v288.4a47.8 47.8 0 01-47.8 47.8H47.8A47.8 47.8 0 010 400.2z"
        className="video_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVideo;
