import * as React from "react";

function SvgFolderOpen(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M69.08 271.63L0 390.05V112a48 48 0 0148-48h160l64 64h160a48 48 0 0148 48v48H152a96.31 96.31 0 00-82.92 47.63z"
        opacity={0.4}
      />
      <path
        d="M152 256h400a24 24 0 0120.73 36.09l-72.46 124.16A64 64 0 01445 448H45a24 24 0 01-20.73-36.09l72.45-124.16A64 64 0 01152 256z"
        className="folder-open_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFolderOpen;
