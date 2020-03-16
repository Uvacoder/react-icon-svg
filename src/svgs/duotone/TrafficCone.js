import * as React from "react";

function SvgTrafficCone(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M337 128H175l-25.4 64h212.77zm63.42 160H111.5l-25.29 64h339.58z"
        opacity={0.4}
      />
      <path
        d="M289.73 10.08A16 16 0 00274.86 0h-37.72a16 16 0 00-14.87 10.08L175.35 128h161.3zM362.12 192H149.88l-38.21 96h288.65zM496 448h-32l-38.21-96H86.21L48 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        className="traffic-cone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTrafficCone;
