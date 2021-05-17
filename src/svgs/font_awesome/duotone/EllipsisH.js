import * as React from "react";

function SvgEllipsisH(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M256 184a72 72 0 1072 72 72 72 0 00-72-72z" opacity={0.4} />
      <path
        d="M432 184a72 72 0 1072 72 72 72 0 00-72-72zm-352 0a72 72 0 1072 72 72 72 0 00-72-72z"
        className="ellipsis-h_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEllipsisH;
