import * as React from "react";

function SvgAngleUp(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M63.52 351.84a23.94 23.94 0 01-33.85 0L7.05 329.33l-.18-.18a23.77 23.77 0 01.18-33.61l96.42-96.15L160 255.86z"
        opacity={0.4}
      />
      <path
        d="M313.13 295.81l-.18-.17L177 160.11a24 24 0 00-34-.11l-39.51 39.39L256.33 352a23.94 23.94 0 0033.85 0L313 329.43a23.78 23.78 0 00.13-33.62z"
        className="angle-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAngleUp;
