import * as React from "react";

function SvgMarsStroke(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M144 384a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
      <path
        d="M372 64h-79a12 12 0 00-8.5 20.5l16.9 16.9-17.5 17.5-14.1-14.1a12 12 0 00-17 0L224.5 133a12 12 0 000 17l14.1 14.1-18 18a143.3 143.3 0 00-76.7-22.1C64.5 160 0 224.5 0 304a144 144 0 10265.9-76.7l18-18 14.1 14.1a12 12 0 0017 0l28.3-28.3a12 12 0 000-17L329.2 164l17.5-17.5 16.9 16.9a12 12 0 0020.5-8.5V76A12.19 12.19 0 00372 64zM144 384a80 80 0 1180-80 80 80 0 01-80 80z"
        className="mars-stroke_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMarsStroke;
