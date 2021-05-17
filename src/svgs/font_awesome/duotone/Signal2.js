import * as React from "react";

function SvgSignal2(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M344 192h-48a16 16 0 00-16 16v288a16 16 0 0016 16h48a16 16 0 0016-16V208a16 16 0 00-16-16zm128-96h-48a16 16 0 00-16 16v384a16 16 0 0016 16h48a16 16 0 0016-16V112a16 16 0 00-16-16zM600 0h-48a16 16 0 00-16 16v480a16 16 0 0016 16h48a16 16 0 0016-16V16a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M88 384H40a16 16 0 00-16 16v96a16 16 0 0016 16h48a16 16 0 0016-16v-96a16 16 0 00-16-16zm128-96h-48a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V304a16 16 0 00-16-16z"
        className="signal-2_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignal2;
