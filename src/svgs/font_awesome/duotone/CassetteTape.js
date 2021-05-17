import * as React from "react";

function SvgCassetteTape(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M147.78 384l-32 64h280.44l-32-64zM464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h32l48-96h256l48 96h32a48 48 0 0048-48V112a48 48 0 00-48-48zm-96 224H144a64 64 0 010-128h224a64 64 0 010 128z"
        opacity={0.4}
      />
      <path
        d="M368 160H144a64 64 0 000 128h224a64 64 0 000-128zm-224 80a16 16 0 1116-16 16 16 0 01-16 16zm61.73 0a57.52 57.52 0 000-32h100.54a57.52 57.52 0 000 32zM368 240a16 16 0 1116-16 16 16 0 01-16 16z"
        className="cassette-tape_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCassetteTape;
