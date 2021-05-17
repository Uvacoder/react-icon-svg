import * as React from "react";

function SvgUnlockAlt(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M72 256V153.5C72 69.5 139.5.3 223.5 0S376 68 376 152v16a23.94 23.94 0 01-24 24h-32a23.94 23.94 0 01-24-24v-16a72.11 72.11 0 00-72.7-72c-39.6.4-71.3 33.3-71.3 72.9V256z"
        opacity={0.4}
      />
      <path
        d="M400 256H48a48 48 0 00-48 48v160a48 48 0 0048 48h352a48 48 0 0048-48V304a48 48 0 00-48-48zM264 408a40 40 0 01-80 0v-48a40 40 0 0180 0z"
        className="unlock-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUnlockAlt;
