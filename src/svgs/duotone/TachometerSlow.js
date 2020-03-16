import * as React from "react";

function SvgTachometerSlow(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm55.12 384H232.88a62.26 62.26 0 01.47-64.86L124.8 206.41a24 24 0 0138.41-28.81l108.56 144.74A63.5 63.5 0 01343.12 416z"
        opacity={0.4}
      />
      <path
        d="M343.12 416H232.88a62.26 62.26 0 01.47-64.86L124.8 206.41a24 24 0 0138.41-28.81l108.56 144.74A63.5 63.5 0 01343.12 416z"
        className="tachometer-slow_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTachometerSlow;
