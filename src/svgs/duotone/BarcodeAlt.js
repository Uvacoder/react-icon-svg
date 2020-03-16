import * as React from "react";

function SvgBarcodeAlt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M592 0H48A48 48 0 000 48v416a48 48 0 0048 48h544a48 48 0 0048-48V48a48 48 0 00-48-48zM160 408a8 8 0 01-8 8h-48a8 8 0 01-8-8V104a8 8 0 018-8h48a8 8 0 018 8zm64 0a8 8 0 01-8 8h-16a8 8 0 01-8-8V104a8 8 0 018-8h16a8 8 0 018 8zm64 0a8 8 0 01-8 8h-16a8 8 0 01-8-8V104a8 8 0 018-8h16a8 8 0 018 8zm128 0a8 8 0 01-8 8h-48a8 8 0 01-8-8V104a8 8 0 018-8h48a8 8 0 018 8zm128 0a8 8 0 01-8 8h-48a8 8 0 01-8-8V104a8 8 0 018-8h48a8 8 0 018 8z"
        opacity={0.4}
      />
      <path
        d="M152 96h-48a8 8 0 00-8 8v304a8 8 0 008 8h48a8 8 0 008-8V104a8 8 0 00-8-8zm64 0h-16a8 8 0 00-8 8v304a8 8 0 008 8h16a8 8 0 008-8V104a8 8 0 00-8-8zm64 0h-16a8 8 0 00-8 8v304a8 8 0 008 8h16a8 8 0 008-8V104a8 8 0 00-8-8zm128 0h-48a8 8 0 00-8 8v304a8 8 0 008 8h48a8 8 0 008-8V104a8 8 0 00-8-8zm128 0h-48a8 8 0 00-8 8v304a8 8 0 008 8h48a8 8 0 008-8V104a8 8 0 00-8-8z"
        className="barcode-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBarcodeAlt;
