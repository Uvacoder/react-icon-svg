import * as React from "react";

function SvgMars(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M143.9 384a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
      <path
        d="M371.9 64h-79a12 12 0 00-8.5 20.5l16.9 16.9-80.7 80.7a143.94 143.94 0 1045.2 45.2l80.7-80.7 16.9 16.9a12 12 0 0020.5-8.5V76a12 12 0 00-12-12zm-228 320a80 80 0 1180-80 80 80 0 01-80 80z"
        className="mars_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMars;
