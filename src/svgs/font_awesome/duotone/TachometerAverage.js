import * as React from "react";

function SvgTachometerAverage(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm55.12 384H232.88A63.36 63.36 0 01264 324.75V128a24 24 0 0148 0v196.75A63.36 63.36 0 01343.12 416z"
        opacity={0.4}
      />
      <path
        d="M264 324.75V128a24 24 0 0148 0v196.75A63.36 63.36 0 01343.12 416H232.88A63.36 63.36 0 01264 324.75z"
        className="tachometer-average_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTachometerAverage;
