import * as React from "react";

function SvgHeadSideHeadphones(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480 320h-32v64a64 64 0 01-64 64h-64v64H64V334.81A191.27 191.27 0 010 192C0 86 86 0 192 0a191.52 191.52 0 00-32 2.88V107.2c-37.73 18-64 56.2-64 100.8a112 112 0 00224 0c0-44.61-26.27-82.8-64-100.81V0h10.08a207.87 207.87 0 01170 88.25c24.66 35 52.16 139.63 73.1 186.75A32 32 0 01480 320z"
        opacity={0.4}
      />
      <path
        d="M256 107.19V0h-64a191.52 191.52 0 00-32 2.88V107.2c-37.73 18-64 56.2-64 100.8a112 112 0 00224 0c0-44.61-26.25-82.8-64-100.81zM208 272a64 64 0 1164-64 64 64 0 01-64 64zm0-96a32 32 0 1032 32 32 32 0 00-32-32z"
        className="head-side-headphones_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHeadSideHeadphones;
