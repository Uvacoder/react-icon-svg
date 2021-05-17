import * as React from "react";

function SvgUsbDrive(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M624 128H448v256h176a16 16 0 0016-16V144a16 16 0 00-16-16zm-40 184a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-96a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M448 112v288a16 16 0 01-16 16H64a64 64 0 01-64-64V160a64 64 0 0164-64h368a16 16 0 0116 16z"
        className="usb-drive_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUsbDrive;
