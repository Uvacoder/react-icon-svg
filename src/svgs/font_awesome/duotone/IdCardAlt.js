import * as React from "react";

function SvgIdCardAlt(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M528 64H352v64h16a16 16 0 010 32H208a16 16 0 010-32h16V64H48a48 48 0 00-48 48v352a48 48 0 0048 48h480a48 48 0 0048-48V112a48 48 0 00-48-48zM288 224a64 64 0 11-64 64 64 64 0 0164-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8A64 64 0 01240 384h8.2a103 103 0 0079.6 0h8.2a64.09 64.09 0 0160.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8z"
        opacity={0.4}
      />
      <path
        d="M352 32a32 32 0 00-32-32h-64a32 32 0 00-32 32v96h128zm-64 320a64 64 0 10-64-64 64 64 0 0064 64zm108.9 76.2A64.09 64.09 0 00336 384h-8.2a103 103 0 01-79.6 0H240a64 64 0 00-60.9 44.2c-3.2 9.8 5.2 19.8 15.6 19.8h186.6c10.4 0 18.8-10 15.6-19.8z"
        className="id-card-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgIdCardAlt;
