import * as React from "react";

function SvgClipboardCheck(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M336 64h-80a64 64 0 0164 64H64a64 64 0 0164-64H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zm-22.8 207.8l-143 141.8a12 12 0 01-17-.1l-82.6-83.3a12 12 0 01.1-17L99.1 285a12 12 0 0117 .1l46 46.4 106-105.2a12 12 0 0117 .1l28.2 28.4a12 12 0 01-.1 17z"
        opacity={0.4}
      />
      <path
        d="M285.1 226.4a12 12 0 00-17-.1l-106 105.2-46-46.4a12 12 0 00-17-.1l-28.4 28.2a12 12 0 00-.1 17l82.6 83.3a12 12 0 0017 .1l143-141.8a12 12 0 00.1-17zM256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
        className="clipboard-check_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgClipboardCheck;
