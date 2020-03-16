import * as React from "react";

function SvgImages(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M424.49 120.48a12 12 0 00-17 0L272 256l-39.51-39.52a12 12 0 00-17 0L160 272v48h352V208zM64 336V128H48a48 48 0 00-48 48v256a48 48 0 0048 48h384a48 48 0 0048-48v-16H144a80.09 80.09 0 01-80-80z"
        opacity={0.4}
      />
      <path
        d="M528 32H144a48 48 0 00-48 48v256a48 48 0 0048 48h384a48 48 0 0048-48V80a48 48 0 00-48-48zM208 80a48 48 0 11-48 48 48 48 0 0148-48zm304 240H160v-48l55.52-55.52a12 12 0 0117 0L272 256l135.52-135.52a12 12 0 0117 0L512 208z"
        className="images_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgImages;
