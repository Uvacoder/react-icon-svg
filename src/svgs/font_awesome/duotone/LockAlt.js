import * as React from "react";

function SvgLockAlt(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M152 225H72v-72C72 69.2 140.2 1 224 1s152 68.2 152 152v72h-80v-72a72 72 0 00-144 0z"
        opacity={0.4}
      />
      <path
        d="M400 225H48a48 48 0 00-48 48v192a48 48 0 0048 48h352a48 48 0 0048-48V273a48 48 0 00-48-48zM264 392a40 40 0 01-80 0v-48a40 40 0 0180 0z"
        className="lock-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLockAlt;
