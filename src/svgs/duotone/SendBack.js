import * as React from "react";

function SvgSendBack(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M608 256H416a32 32 0 00-32 32v192a32 32 0 0032 32h192a32 32 0 0032-32V288a32 32 0 00-32-32zm-32 192H448V320h128zM224 0H32A32 32 0 000 32v192a32 32 0 0032 32h192a32 32 0 0032-32V32a32 32 0 00-32-32zm-32 192H64V64h128z"
        opacity={0.4}
      />
      <path
        d="M384 416H208a48 48 0 01-48-48V256h64a32 32 0 0032-32V96h176a48 48 0 0148 48v112h-64a32 32 0 00-32 32z"
        className="send-back_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSendBack;
