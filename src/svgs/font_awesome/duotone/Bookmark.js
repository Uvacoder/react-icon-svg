import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M384 48v464L192 400 0 512V48A48 48 0 0148 0h32v326.11a16 16 0 0023.16 14.31L192 296l88.84 44.42A16 16 0 00304 326.11V0h32a48 48 0 0148 48z"
        opacity={0.4}
      />
      <path
        d="M304 0v326.11a16 16 0 01-23.16 14.31L192 296l-88.84 44.42A16 16 0 0180 326.11V0z"
        className="bookmark_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBookmark;
