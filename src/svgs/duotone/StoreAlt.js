import * as React from "react";

function SvgStoreAlt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M320 384H128V224H64v256a32 32 0 0032 32h256a32 32 0 0032-32V224h-64zm192-160v272a16 16 0 0016 16h32a16 16 0 0016-16V224z"
        opacity={0.4}
      />
      <path
        d="M634.55 142.2c14.1 21.3-1.1 49.8-26.6 49.8H32.05c-25.6 0-40.8-28.5-26.6-49.8l85.3-128A31.87 31.87 0 01117.35 0h405.2a32.18 32.18 0 0126.7 14.2z"
        className="store-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStoreAlt;
