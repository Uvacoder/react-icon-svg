import * as React from "react";

function SvgTerminal(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 421.34v32a24 24 0 01-24 24H312a24 24 0 01-24-24v-32a24 24 0 0124-24h304a24 24 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M29.7 464.66L7 442a24 24 0 010-33.9l154-154.76L7 98.6a24 24 0 010-33.9L29.7 42a24 24 0 0133.94 0L258 236.37a24 24 0 010 33.94L63.64 464.66a24 24 0 01-33.94 0z"
        className="terminal_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTerminal;
