import * as React from "react";

function SvgRecordVinyl(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 128a128 128 0 10128 128 128 128 0 00-128-128zm0 152a24 24 0 1124-24 24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 11128-128 128 128 0 01-128 128z"
        className="record-vinyl_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRecordVinyl;
