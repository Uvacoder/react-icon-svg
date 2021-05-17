import * as React from "react";

function SvgTriangle(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M569.54 440l-240-416c-18.4-32-64.68-32-83.18 0L6.48 440c-18.41 31.91 4.59 72 41.59 72h479.87c36.91 0 60-40 41.6-72zm-124.68 8H131.15a32 32 0 01-27.72-48l156.82-272a32 32 0 0155.44 0l156.89 272a32 32 0 01-27.72 48z"
        opacity={0.4}
      />
      <path
        d="M103.43 400l156.82-272a32 32 0 0155.44 0l156.89 272a32 32 0 01-27.71 48H131.15c-24.62 0-40.02-26.65-27.72-48z"
        className="triangle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTriangle;
