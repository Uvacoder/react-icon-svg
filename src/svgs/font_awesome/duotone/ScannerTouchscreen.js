import * as React from "react";

function SvgScannerTouchscreen(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M400 96H16a16 16 0 00-16 16v137.4a16 16 0 004.7 11.3L32 288v176a48 48 0 0048 48h256a48 48 0 0048-48V288l27.3-27.3a16 16 0 004.7-11.3V112a16 16 0 00-16-16zm-80 336a16 16 0 01-16 16H112a16 16 0 01-16-16V176a16 16 0 0116-16h192a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M312 0h-16a8 8 0 00-8 8v56h32V8a8 8 0 00-8-8zm-56 8a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h64zm152-8h-48a8 8 0 00-8 8v56h64V8a8 8 0 00-8-8zm160 0h-48a8 8 0 00-8 8v272a8 8 0 008 8h48a8 8 0 008-8V8a8 8 0 00-8-8zm-96 0h-16a8 8 0 00-8 8v272a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8zM304 160H112a16 16 0 00-16 16v256a16 16 0 0016 16h192a16 16 0 0016-16V176a16 16 0 00-16-16z"
        className="scanner-touchscreen_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScannerTouchscreen;
