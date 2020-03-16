import * as React from "react";

function SvgClone(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M48 512a48 48 0 01-48-48V176a48 48 0 0148-48h48v208a80.09 80.09 0 0080 80h208v48a48 48 0 01-48 48H48z"
        opacity={0.4}
      />
      <path
        d="M512 48v288a48 48 0 01-48 48H176a48 48 0 01-48-48V48a48 48 0 0148-48h288a48 48 0 0148 48z"
        className="clone_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgClone;
