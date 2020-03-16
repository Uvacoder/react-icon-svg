import * as React from "react";

function SvgScannerKeyboard(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M400 96H16a16 16 0 00-16 16v137.4a16 16 0 004.7 11.3L32 288v176a48 48 0 0048 48h256a48 48 0 0048-48V288l27.3-27.3a16 16 0 004.7-11.3V112a16 16 0 00-16-16zM192 440a8 8 0 01-8 8h-80a8 8 0 01-8-8v-48a8 8 0 018-8h80a8 8 0 018 8zm0-96a8 8 0 01-8 8h-80a8 8 0 01-8-8v-48a8 8 0 018-8h80a8 8 0 018 8zm128 96a8 8 0 01-8 8h-80a8 8 0 01-8-8v-48a8 8 0 018-8h80a8 8 0 018 8zm0-96a8 8 0 01-8 8h-80a8 8 0 01-8-8v-48a8 8 0 018-8h80a8 8 0 018 8zm32-128a8 8 0 01-8 8H72a8 8 0 01-8-8v-48a8 8 0 018-8h272a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M568 0h-48a8 8 0 00-8 8v272a8 8 0 008 8h48a8 8 0 008-8V8a8 8 0 00-8-8zM320 8a8 8 0 00-8-8h-16a8 8 0 00-8 8v56h32zm-64 0a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h64zm152-8h-48a8 8 0 00-8 8v56h64V8a8 8 0 00-8-8zm64 0h-16a8 8 0 00-8 8v272a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8zM344 160H72a8 8 0 00-8 8v48a8 8 0 008 8h272a8 8 0 008-8v-48a8 8 0 00-8-8z"
        className="scanner-keyboard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScannerKeyboard;
