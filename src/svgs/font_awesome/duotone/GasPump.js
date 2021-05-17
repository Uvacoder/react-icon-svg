import * as React from "react";

function SvgGasPump(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 0H96a64.06 64.06 0 00-64 64v384h288V64a64.06 64.06 0 00-64-64zm0 192H96V64h160z"
        opacity={0.4}
      />
      <path
        d="M256 64H96v128h160zm80 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm157.2-340.7l-81-81a16.06 16.06 0 00-22.6 0l-11.3 11.3a16.06 16.06 0 000 22.6L416 97.9V160a55.9 55.9 0 0048 55.2V376a24 24 0 01-48 0v-32a88 88 0 00-88-88h-8v48h8a40 40 0 0140 40v27.8c0 37.7 27 72 64.5 75.9A72.2 72.2 0 00512 376V152.6a64.15 64.15 0 00-18.8-45.3z"
        className="gas-pump_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGasPump;
