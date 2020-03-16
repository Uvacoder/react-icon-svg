import * as React from "react";

function SvgTrash(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M53.2 467L32 96h384l-21.2 371a48 48 0 01-47.9 45H101.1a48 48 0 01-47.9-45z"
        opacity={0.4}
      />
      <path
        d="M0 80V48a16 16 0 0116-16h120l9.4-18.7A23.72 23.72 0 01166.8 0h114.3a24 24 0 0121.5 13.3L312 32h120a16 16 0 0116 16v32a16 16 0 01-16 16H16A16 16 0 010 80z"
        className="trash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTrash;
