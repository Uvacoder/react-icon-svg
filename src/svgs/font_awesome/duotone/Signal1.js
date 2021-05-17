import * as React from "react";

function SvgSignal1(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M216 288h-48a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V304a16 16 0 00-16-16zm128-96h-48a16 16 0 00-16 16v288a16 16 0 0016 16h48a16 16 0 0016-16V208a16 16 0 00-16-16zM600 0h-48a16 16 0 00-16 16v480a16 16 0 0016 16h48a16 16 0 0016-16V16a16 16 0 00-16-16zM472 96h-48a16 16 0 00-16 16v384a16 16 0 0016 16h48a16 16 0 0016-16V112a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M104 400v96a16 16 0 01-16 16H40a16 16 0 01-16-16v-96a16 16 0 0116-16h48a16 16 0 0116 16z"
        className="signal-1_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignal1;
