import * as React from "react";

function SvgBandAid(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M0 160v192a64.05 64.05 0 0064 64h96V96H64a64.05 64.05 0 00-64 64zm576-64h-96v320h96a64.05 64.05 0 0064-64V160a64.05 64.05 0 00-64-64zM192 416h256V96H192zm176-232a24 24 0 11-24 24 23.94 23.94 0 0124-24zm0 96a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-96-96a24 24 0 11-24 24 23.94 23.94 0 0124-24zm0 96a24 24 0 11-24 24 23.94 23.94 0 0124-24z"
        opacity={0.4}
      />
      <path
        d="M160 416h32V96h-32zM448 96v320h32V96z"
        className="band-aid_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBandAid;
