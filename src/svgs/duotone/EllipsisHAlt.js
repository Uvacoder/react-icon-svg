import * as React from "react";

function SvgEllipsisHAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M80 184a72 72 0 1072 72 72 72 0 00-72-72zm0 96a24 24 0 1124-24 24 24 0 01-24 24zm352-96a72 72 0 1072 72 72 72 0 00-72-72zm0 96a24 24 0 1124-24 24 24 0 01-24 24zm-176-96a72 72 0 1072 72 72 72 0 00-72-72zm0 96a24 24 0 1124-24 24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M80 232a24 24 0 1024 24 24 24 0 00-24-24zm176 0a24 24 0 1024 24 24 24 0 00-24-24zm176 0a24 24 0 1024 24 24 24 0 00-24-24z"
        className="ellipsis-h-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEllipsisHAlt;
