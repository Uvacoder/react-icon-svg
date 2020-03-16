import * as React from "react";

function SvgClipboard(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M336 63h-80v1a64 64 0 0164 64H64a64 64 0 0164-64v-1H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V111a48 48 0 00-48-48z"
        opacity={0.4}
      />
      <path
        d="M256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
        className="clipboard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgClipboard;
