import * as React from "react";

function SvgCowbell(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M176.32 96H112.2V48a48.1 48.1 0 0148.09-48h128.23a48.1 48.1 0 0148.09 48v48h-64.12V64h-96.17z"
        opacity={0.4}
      />
      <path
        d="M447.49 474.35A32 32 0 01415.93 512H32.07A32 32 0 01.51 474.35l63.29-352A32.06 32.06 0 0195.36 96h257.28a32.06 32.06 0 0131.56 26.35z"
        className="cowbell_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCowbell;
