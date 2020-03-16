import * as React from "react";

function SvgEllipsisV(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path d="M96 184a72 72 0 1072 72 72 72 0 00-72-72z" opacity={0.4} />
      <path
        d="M96 152a72 72 0 10-72-72 72 72 0 0072 72zm0 208a72 72 0 1072 72 72 72 0 00-72-72z"
        className="ellipsis-v_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEllipsisV;
