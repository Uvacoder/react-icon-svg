import * as React from "react";

function SvgBoot(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 448v32l32 32h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l32-32v-32zM352 80V16a16 16 0 00-16-16H16A16 16 0 000 16v80h336a16 16 0 0016-16z"
        opacity={0.4}
      />
      <path
        d="M439.3 285.8L320 256h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56v-32h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56v-32H0v288h512v-37a96.07 96.07 0 00-72.7-93.2z"
        className="boot_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoot;
