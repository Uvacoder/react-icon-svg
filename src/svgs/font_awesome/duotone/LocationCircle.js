import * as React from "react";

function SvgLocationCircle(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm110.24 169.74l-95.95 207.89c-11.2 24-46.38 16-46.38-9.59V288H128c-25.59 0-33.58-35.18-9.59-46.38l207.89-95.91c19.15-8 39.94 12.84 31.94 32z"
        opacity={0.4}
      />
      <path
        d="M118.36 241.7l207.89-95.95c19.2-8 40 12.8 32 32l-96 207.88c-11.2 24-46.38 16-46.38-9.59V288H128c-25.64 0-33.63-35.14-9.64-46.34z"
        className="location-circle_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLocationCircle;
