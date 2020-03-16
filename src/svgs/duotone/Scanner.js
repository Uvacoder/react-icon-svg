import * as React from "react";

function SvgScanner(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M256 448a32 32 0 0032-32V304.27L205 448zM368 64H96a95.91 95.91 0 00-1.7 191.79L6.44 408A48 48 0 0024 473.53l55.4 32A48 48 0 00145 488l134-232h89.09a16 16 0 0016-16V80a16 16 0 00-16.03-16z"
        opacity={0.4}
      />
      <path
        d="M632 448H456a8 8 0 00-8 8v48a8 8 0 008 8h176a8 8 0 008-8v-48a8 8 0 00-8-8zm0-96H456a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zm0-64H456a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zm0-224H456a8 8 0 00-8 8v48a8 8 0 008 8h176a8 8 0 008-8V72a8 8 0 00-8-8zm0 96H456a8 8 0 00-8 8v48a8 8 0 008 8h176a8 8 0 008-8v-48a8 8 0 00-8-8zm0-160H456a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8V8a8 8 0 00-8-8z"
        className="scanner_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScanner;
