import * as React from "react";

function SvgVideoSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M448 314.49V177.3l109.6-75.6c21.3-14.6 50.4.4 50.4 25.8v256.9c0 17.39-13.59 29.84-29 31.38zm-32-24.74V111.8A47.8 47.8 0 00368.2 64H123.91zM32 400.17A47.8 47.8 0 0079.77 448h288.4a47.45 47.45 0 0029.6-10.5L32 154.67z"
        opacity={0.4}
      />
      <path
        d="M3.37 31.37L23 6.17a16.06 16.06 0 0122.5-2.8l588.3 454.7a15.85 15.85 0 012.8 22.4l-19.6 25.3a16.06 16.06 0 01-22.5 2.8L6.17 53.77a15.93 15.93 0 01-2.8-22.4z"
        className="video-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVideoSlash;
