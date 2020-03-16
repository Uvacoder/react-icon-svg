import * as React from "react";

function SvgLevelUpAlt(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M232 160v328a24 24 0 01-24 24H12a12 12 0 01-8.48-20.48l56-56A12 12 0 0168 432h84V160z"
        opacity={0.4}
      />
      <path
        d="M88 160c-20.94 0-31.76-25-17.6-40.33l104-112c.4-.43.82-.86 1.26-1.26a24 24 0 0133.91 1.26l104 112C327.82 135 316.84 160 296 160z"
        className="level-up-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLevelUpAlt;
