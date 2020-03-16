import * as React from "react";

function SvgArrowToBottom(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M360 480H24a23.94 23.94 0 01-24-23.88V440a23.94 23.94 0 0123.88-24H360a23.94 23.94 0 0124 23.88V456a23.94 23.94 0 01-23.88 24z"
        opacity={0.4}
      />
      <path
        d="M327.87 190.52l17.06 17a23.86 23.86 0 01.17 33.74l-.17.17L209 377a24 24 0 01-33.94.06L175 377 39.07 241.43a23.86 23.86 0 01-.17-33.74l.17-.17 17.06-17a24 24 0 0133.94-.06l.06.06 65.81 65.61V56a24 24 0 0124-24h24.14a24 24 0 0124.07 23.93v200.2L294 190.52a23.91 23.91 0 0133.8-.07z"
        className="arrow-to-bottom_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowToBottom;
