import * as React from "react";

function SvgLockOpenAlt(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M576 152v80a23.94 23.94 0 01-24 24h-32a23.94 23.94 0 01-24-24v-80a72.11 72.11 0 00-72.7-72c-39.6.4-71.3 33.3-71.3 72.9V224h-80v-70.5C272 69.5 339.5.3 423.5 0S576 68 576 152z"
        opacity={0.4}
      />
      <path
        d="M400 224H48a48 48 0 00-48 48v192a48 48 0 0048 48h352a48 48 0 0048-48V272a48 48 0 00-48-48zM264 392a40 40 0 01-80 0v-48a40 40 0 0180 0z"
        className="lock-open-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLockOpenAlt;
