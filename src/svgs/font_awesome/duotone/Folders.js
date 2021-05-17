import * as React from "react";

function SvgFolders(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 112v224a48 48 0 01-48 48H176a48 48 0 01-48-48V48a48 48 0 0148-48h160l64 64h192a48 48 0 0148 48z"
        opacity={0.4}
      />
      <path
        d="M48 512a48 48 0 01-48-48V176a48 48 0 0148-48h48v208a80.09 80.09 0 0080 80h336v48a48 48 0 01-48 48z"
        className="folders_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFolders;
