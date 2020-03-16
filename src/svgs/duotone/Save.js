import * as React from "react";

function SvgSave(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path d="M288 352a64 64 0 11-64-64 64 64 0 0164 64z" opacity={0.4} />
      <path
        d="M433.94 129.94l-83.88-83.88A48 48 0 00316.12 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V163.88a48 48 0 00-14.06-33.94zM224 416a64 64 0 1164-64 64 64 0 01-64 64zm96-204a12 12 0 01-12 12H76a12 12 0 01-12-12V108a12 12 0 0112-12h228.52a12 12 0 018.48 3.52l3.48 3.48a12 12 0 013.52 8.48z"
        className="save_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSave;
