import * as React from "react";

function SvgCropAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M160 24a24 24 0 00-24-24H88a24 24 0 00-24 24v392a32 32 0 0032 32h224v-96H160zm328 328h-40v96h40a24 24 0 0024-24v-48a24 24 0 00-24-24z"
        opacity={0.4}
      />
      <path
        d="M416 64H192v96h160v328a24 24 0 0024 24h48a24 24 0 0024-24V96a32 32 0 00-32-32zM0 88v48a24 24 0 0024 24h40V64H24A24 24 0 000 88z"
        className="crop-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCropAlt;
