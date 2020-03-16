import * as React from "react";

function SvgCrop(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 376v48a24 24 0 01-24 24h-40v-96h40a24 24 0 0124 24zM416 64a32 32 0 0132 32v13.25l59.31-59.31a16 16 0 000-22.63L484.69 4.69a16 16 0 00-22.63 0L402.75 64zm-64 141.25V160h-45.25L160 306.75V24a24 24 0 00-24-24H88a24 24 0 00-24 24v392a32 32 0 0032 32h224v-96H205.25z"
        opacity={0.4}
      />
      <path
        d="M416 64H192v96h160v328a24 24 0 0024 24h48a24 24 0 0024-24V96a32 32 0 00-32-32zM0 88v48a24 24 0 0024 24h40V64H24A24 24 0 000 88z"
        className="crop_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCrop;
