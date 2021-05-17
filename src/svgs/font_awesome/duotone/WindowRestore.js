import * as React from "react";

function SvgWindowRestore(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 48v288a48 48 0 01-48 48h-48V176a80.11 80.11 0 00-80-80H128V48a48 48 0 0148-48h288a48 48 0 0148 48z"
        opacity={0.4}
      />
      <path
        d="M336 128H48a48 48 0 00-48 48v288a48 48 0 0048 48h288a48 48 0 0048-48V176a48 48 0 00-48-48zm-20 128H64v-52a12 12 0 0112-12h228a12 12 0 0112 12z"
        className="window-restore_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWindowRestore;
