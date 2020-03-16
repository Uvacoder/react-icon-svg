import * as React from "react";

function SvgInbox(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M376 256l-32 64H232l-32-64H76.92l85.33-128h251.5l85.33 128z"
        opacity={0.4}
      />
      <path
        d="M567.94 243.91L462.25 85.37A48 48 0 00422.31 64H153.69a48 48 0 00-39.94 21.37L8.06 243.91A48 48 0 000 270.53V400a48 48 0 0048 48h480a48 48 0 0048-48V270.53a48 48 0 00-8.06-26.62zM376 256l-32 64H232l-32-64H76.92l85.33-128h251.5l85.33 128z"
        className="inbox_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgInbox;
