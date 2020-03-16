import * as React from "react";

function SvgFilter(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M505 41L320 225.93V488c0 19.51-22 30.71-37.76 19.66l-80-56A24 24 0 01192 432V226L7 41C-8 25.87 2.69 0 24 0h464c21.33 0 32 25.9 17 41z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgFilter;
