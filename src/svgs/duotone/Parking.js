import * as React from "react";

function SvgParking(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M272 224a32.09 32.09 0 01-32 32h-48v-64h48a32.09 32.09 0 0132 32zM448 80v352a48 48 0 01-48 48H48a48 48 0 01-48-48V80a48 48 0 0148-48h352a48 48 0 0148 48zM336 224a96.15 96.15 0 00-96-96h-96a16 16 0 00-16 16v224a16 16 0 0016 16h32a16 16 0 0016-16v-48h48a96.15 96.15 0 0096-96z"
        opacity={0.4}
      />
      <path
        d="M240 128h-96a16 16 0 00-16 16v224a16 16 0 0016 16h32a16 16 0 0016-16v-48h48a96 96 0 000-192zm0 128h-48v-64h48a32 32 0 010 64z"
        className="parking_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgParking;
