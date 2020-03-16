import * as React from "react";

function SvgSpeaker(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zM192 64a48 48 0 11-48 48 48 48 0 0148-48zm0 384a112 112 0 11112-112 112 112 0 01-112 112z"
        opacity={0.4}
      />
      <path
        d="M192 224a112 112 0 10112 112 112 112 0 00-112-112zm0 176a64 64 0 1164-64 64 64 0 01-64 64zm0-240a48 48 0 10-48-48 48 48 0 0048 48z"
        className="speaker_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSpeaker;
