import * as React from "react";

function SvgSignal4(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M616 16v480a16 16 0 01-16 16h-48a16 16 0 01-16-16V16a16 16 0 0116-16h48a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M216 288h-48a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V304a16 16 0 00-16-16zM88 384H40a16 16 0 00-16 16v96a16 16 0 0016 16h48a16 16 0 0016-16v-96a16 16 0 00-16-16zm256-192h-48a16 16 0 00-16 16v288a16 16 0 0016 16h48a16 16 0 0016-16V208a16 16 0 00-16-16zm128-96h-48a16 16 0 00-16 16v384a16 16 0 0016 16h48a16 16 0 0016-16V112a16 16 0 00-16-16z"
        className="signal-4_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignal4;
