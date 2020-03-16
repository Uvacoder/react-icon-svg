import * as React from "react";

function SvgCopy(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M352 96V0H152a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24V96z"
        opacity={0.4}
      />
      <path
        d="M96 392V96H24a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24v-40H152a56.06 56.06 0 01-56-56zM441 73L375 7a24 24 0 00-17-7h-6v96h96v-6.06A24 24 0 00441 73z"
        className="copy_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCopy;
