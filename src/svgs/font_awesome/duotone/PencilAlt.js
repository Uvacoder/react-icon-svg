import * as React from "react";

function SvgPencilAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M96 352H32l-16 64 80 80 64-16v-64H96zM498 74.26l-.11-.11L437.77 14a48.09 48.09 0 00-67.9 0l-46.1 46.1a12 12 0 000 17l111 111a12 12 0 0017 0l46.1-46.1a47.93 47.93 0 00.13-67.74z"
        opacity={0.4}
      />
      <path
        d="M.37 483.85a24 24 0 0019.47 27.8 24.27 24.27 0 008.33 0l67.32-16.16-79-79zM412.3 210.78l-111-111a12.13 12.13 0 00-17.1 0L32 352h64v64h64v64l252.27-252.25a12 12 0 00.03-16.97zm-114.41-24.93l-154 154a14 14 0 11-19.8-19.8l154-154a14 14 0 1119.8 19.8z"
        className="pencil-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPencilAlt;
