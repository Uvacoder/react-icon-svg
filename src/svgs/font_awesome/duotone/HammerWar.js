import * as React from "react";

function SvgHammerWar(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 64v192a32 32 0 01-37.26 31.56L192 261.77 37.26 287.55A32 32 0 010 256V64a32 32 0 0137.26-31.56L192 58.23l154.74-25.78A32 32 0 01384 64z"
        opacity={0.4}
      />
      <path
        d="M160 52.9V16a16 16 0 0116-16h32a16 16 0 0116 16v36.9l-32 5.33zm0 246.64V496a16 16 0 0016 16h32a16 16 0 0016-16V299.54l-32-5.33z"
        className="hammer-war_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHammerWar;
