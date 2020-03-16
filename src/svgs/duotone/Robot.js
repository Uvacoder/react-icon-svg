import * as React from "react";

function SvgRobot(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M0 256v128a32 32 0 0032 32h32V224H32a32 32 0 00-32 32zm608-32h-32v192h32a32 32 0 0032-32V256a32 32 0 00-32-32zM192 416h64v-32h-64zm192 0h64v-32h-64zm-96 0h64v-32h-64z"
        opacity={0.4}
      />
      <path
        d="M464 96H352V32a32 32 0 00-64 0v64H176a80 80 0 00-80 80v272a64.06 64.06 0 0064 64h320a64.06 64.06 0 0064-64V176a80 80 0 00-80-80zM256 416h-64v-32h64zm-32-120a40 40 0 1140-40 40 40 0 01-40 40zm128 120h-64v-32h64zm96 0h-64v-32h64zm-32-120a40 40 0 1140-40 40 40 0 01-40 40z"
        className="robot_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRobot;
