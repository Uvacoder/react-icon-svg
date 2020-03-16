import * as React from "react";

function SvgVenus(props) {
  return (
    <svg viewBox="0 0 288 512" {...props}>
      <path d="M144 256a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
      <path
        d="M288 176a144 144 0 10-176 140.4V368H76a12 12 0 00-12 12v40a12 12 0 0012 12h36v36a12 12 0 0012 12h40a12 12 0 0012-12v-36h36a12 12 0 0012-12v-40a12 12 0 00-12-12h-36v-51.6A144 144 0 00288 176zm-144 80a80 80 0 1180-80 80 80 0 01-80 80z"
        className="venus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVenus;
