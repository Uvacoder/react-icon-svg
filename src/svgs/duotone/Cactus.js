import * as React from "react";

function SvgCactus(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M224 144a16 16 0 1016 16 16 16 0 00-16-16zm64 224a16 16 0 1016 16 16 16 0 00-16-16zm176-144a48 48 0 00-48 48v64a16 16 0 01-16 16h-48v96h48a112.14 112.14 0 00112-112v-64a48 48 0 00-48-48zM96 208v-64a48 48 0 00-96 0v64a112.14 112.14 0 00112 112h48v-96h-48a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path
        d="M352 96a96 96 0 00-192 0v416h192zm-128 80a16 16 0 1116-16 16 16 0 01-16 16zm64 224a16 16 0 1116-16 16 16 0 01-16 16z"
        className="cactus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCactus;
