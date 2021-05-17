import * as React from "react";

function SvgTachometerSlowest(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm55.12 384H232.88a65.78 65.78 0 01-6.9-18L92.05 375.67a24 24 0 017.9-47.34l133.68 22.28A63.77 63.77 0 01343.12 416z"
        opacity={0.4}
      />
      <path
        d="M343.12 416H232.88a65.78 65.78 0 01-6.9-18L92.05 375.67a24 24 0 017.9-47.34l133.68 22.28A63.77 63.77 0 01343.12 416z"
        className="tachometer-slowest_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTachometerSlowest;
