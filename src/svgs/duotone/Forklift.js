import * as React from "react";

function SvgForklift(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M96 352a80 80 0 1080 80 80 80 0 00-80-80zm528 32h-80V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v416a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zm-272-32a80 80 0 1080 80 80 80 0 00-80-80z"
        opacity={0.4}
      />
      <path
        d="M410.8 211.9L332.5 29.1A48 48 0 00288.3 0H144a48 48 0 00-48 48v112H48a48 48 0 00-48 48v166.23a113.49 113.49 0 0116.8-21.43 112 112 0 01158.4 0 111.19 111.19 0 0131.67 63.2h34.26A112 112 0 01416 340.06v-103a64.23 64.23 0 00-5.2-25.16zM352 256h-96l-96-96V64h117.8L352 237.1z"
        className="forklift_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgForklift;
