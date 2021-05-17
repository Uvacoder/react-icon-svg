import * as React from "react";

function SvgBringFront(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M224 0H32A32 32 0 000 32v192a32 32 0 0032 32h128v-64H64V64h128v34.74A47.92 47.92 0 01208 96h48V32a32 32 0 00-32-32zm384 256H480v64h96v128H448v-34.74a47.92 47.92 0 01-16 2.74h-48v64a32 32 0 0032 32h192a32 32 0 0032-32V288a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M480 144v224a48 48 0 01-48 48H208a48 48 0 01-48-48V144a48 48 0 0148-48h224a48 48 0 0148 48z"
        className="bring-front_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBringFront;
