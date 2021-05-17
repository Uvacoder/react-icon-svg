import * as React from "react";

function SvgWindowMaximize(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 192H64v-84a12 12 0 0112-12h360a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M464 32H48A48 48 0 000 80v352a48 48 0 0048 48h416a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 160H64v-84a12 12 0 0112-12h360a12 12 0 0112 12z"
        className="window-maximize_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWindowMaximize;
