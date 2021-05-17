import * as React from "react";

function SvgToggleOff(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zM192 384a128 128 0 11128-128 127.93 127.93 0 01-128 128z"
        opacity={0.4}
      />
      <path
        d="M192 384a128 128 0 11128-128 127.93 127.93 0 01-128 128z"
        className="toggle-off_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgToggleOff;
