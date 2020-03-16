import * as React from "react";

function SvgSign(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 80a16 16 0 0116-16h48V16A16 16 0 0180 0h32a16 16 0 0116 16v48h368a16 16 0 0116 16v32a16 16 0 01-16 16H128v368a16 16 0 01-16 16H80a16 16 0 01-16-16V128H16a16 16 0 01-16-16z"
        opacity={0.4}
      />
      <path d="M160 384V160h320v224z" className="sign_svg__fa-primary" />
    </svg>
  );
}

export default SvgSign;
