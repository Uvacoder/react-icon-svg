import * as React from "react";

function SvgSendBackward(props) {
  return (
    <svg viewBox="0 0 514 512" {...props}>
      <path
        d="M464 160H208a48 48 0 00-48 48v256a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zm-16 288H224V224h224z"
        opacity={0.4}
      />
      <path
        d="M160 352H48a48 48 0 01-48-48V48A48 48 0 0148 0h256a48 48 0 0148 48v112H208a48 48 0 00-48 48z"
        className="send-backward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSendBackward;
