import * as React from "react";

function SvgBatteryEmpty(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M616 160h-8v-16a48 48 0 00-48-48H48a48 48 0 00-48 48v224a48 48 0 0048 48h512a48 48 0 0048-48v-16h8a24 24 0 0024-24V184a24 24 0 00-24-24zm-40 128h-32v64H64V160h480v64h32z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgBatteryEmpty;
