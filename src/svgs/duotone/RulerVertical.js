import * as React from "react";

function SvgRulerVertical(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path
        d="M160 104v16a8 8 0 008 8h88v64h-88a8 8 0 00-8 8v16a8 8 0 008 8h88v64h-88a8 8 0 00-8 8v16a8 8 0 008 8h88v64h-88a8 8 0 00-8 8v16a8 8 0 008 8h88v64a32 32 0 01-32 32H32a32 32 0 01-32-32V32A32 32 0 0132 0h192a32 32 0 0132 32v64h-88a8 8 0 00-8 8z"
        opacity={0.4}
      />
      <path
        d="M160 296v16a8 8 0 008 8h88v-32h-88a8 8 0 00-8 8zm0 96v16a8 8 0 008 8h88v-32h-88a8 8 0 00-8 8zm0-192v16a8 8 0 008 8h88v-32h-88a8 8 0 00-8 8zm8-104a8 8 0 00-8 8v16a8 8 0 008 8h88V96z"
        className="ruler-vertical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRulerVertical;
