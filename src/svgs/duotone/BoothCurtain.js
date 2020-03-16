import * as React from "react";

function SvgBoothCurtain(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480 0h-32v496a16 16 0 0016 16h32a16 16 0 0016-16V32a32 32 0 00-32-32zM0 32v464a16 16 0 0016 16h32a16 16 0 0016-16V64h32V0H32A32 32 0 000 32z"
        opacity={0.4}
      />
      <path
        d="M416 0v400a48 48 0 01-84.7 31 15.07 15.07 0 00-22.6 0 48.11 48.11 0 01-73.4 0 15.07 15.07 0 00-22.6 0 48 48 0 01-84.7-31V0z"
        className="booth-curtain_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoothCurtain;
