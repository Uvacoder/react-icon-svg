import * as React from "react";

function SvgTransgender(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M224 240a80 80 0 11-80-80 80.11 80.11 0 0180 80z"
        opacity={0.4}
      />
      <path
        d="M372 0h-79a12 12 0 00-8.5 20.5l16.9 16.9-80.7 80.7A144 144 0 10112 380.4V408H76a12 12 0 00-12 12v40a12 12 0 0012 12h36v28a12 12 0 0012 12h40a12 12 0 0012-12v-28h36a12 12 0 0012-12v-40a12 12 0 00-12-12h-36v-27.6a144 144 0 0089.9-217.1l80.7-80.7 16.9 16.9A12 12 0 00384 91V12a12 12 0 00-12-12zM144 320a80 80 0 1180-80 80 80 0 01-80 80z"
        className="transgender_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTransgender;
