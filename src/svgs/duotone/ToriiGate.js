import * as React from "react";

function SvgToriiGate(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64 192h64v-64H64zm160 0h64v-64h-64zM64 496a16 16 0 0016 16h32a16 16 0 0016-16V256H64zm320 0a16 16 0 0016 16h32a16 16 0 0016-16V256h-64zm0-368v64h64v-64z"
        opacity={0.4}
      />
      <path
        d="M376.45 32h-240.9A303.17 303.17 0 010 0v96a32 32 0 0032 32h448a32 32 0 0032-32V0a303.17 303.17 0 01-135.55 32zM496 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="torii-gate_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgToriiGate;
