import * as React from "react";

function SvgTag(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M497.94 225.94L286.06 14.06A48 48 0 00252.12 0H48A48 48 0 000 48v204.12a48 48 0 0014.06 33.94l211.88 211.88a48 48 0 0067.88 0l204.12-204.12a48 48 0 000-67.88zM112 160a48 48 0 1148-48 48 48 0 01-48 48z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgTag;
