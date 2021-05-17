import * as React from "react";

function SvgJoystick(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M112 320H80a16 16 0 00-16 16v16h64v-16a16 16 0 00-16-16zm112-96c-11.2 0-21.8-2.14-32-5.2V352h64V218.8c-10.2 3.06-20.8 5.2-32 5.2z"
        opacity={0.4}
      />
      <path
        d="M416 352H32a32 32 0 00-32 32v96a32 32 0 0032 32h384a32 32 0 0032-32v-96a32 32 0 00-32-32zM224 224a112 112 0 10-112-112 112 112 0 00112 112zM200 48a24 24 0 11-24 24 24 24 0 0124-24z"
        className="joystick_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgJoystick;
