import * as React from "react";

function SvgImage(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 384H64v-48l71.51-71.52a12 12 0 0117 0L208 320l135.51-135.52a12 12 0 0117 0L448 272z"
        opacity={0.4}
      />
      <path
        d="M464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48zm-352 56a56 56 0 11-56 56 56 56 0 0156-56zm336 264H64v-48l71.51-71.52a12 12 0 0117 0L208 320l135.51-135.52a12 12 0 0117 0L448 272z"
        className="image_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgImage;
