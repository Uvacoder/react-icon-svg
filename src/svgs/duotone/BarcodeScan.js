import * as React from "react";

function SvgBarcodeScan(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M280 0h-48a8 8 0 00-8 8v152h64V8a8 8 0 00-8-8zM152 0H72a8 8 0 00-8 8v152h96V8a8 8 0 00-8-8zM64 504a8 8 0 008 8h80a8 8 0 008-8V352H64zM472 0h-48a8 8 0 00-8 8v152h64V8a8 8 0 00-8-8zm96 0h-48a8 8 0 00-8 8v152h64V8a8 8 0 00-8-8zM376 0h-16a8 8 0 00-8 8v152h32V8a8 8 0 00-8-8zm136 504a8 8 0 008 8h48a8 8 0 008-8V352h-64zm-288 0a8 8 0 008 8h48a8 8 0 008-8V352h-64zm192 0a8 8 0 008 8h48a8 8 0 008-8V352h-64zm-64 0a8 8 0 008 8h16a8 8 0 008-8V352h-32z"
        opacity={0.4}
      />
      <path
        d="M640 232v48a8 8 0 01-8 8H8a8 8 0 01-8-8v-48a8 8 0 018-8h624a8 8 0 018 8z"
        className="barcode-scan_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBarcodeScan;
