import * as React from "react";

function SvgFolderMinus(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M464 128H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm-96 168a16 16 0 01-16 16H160a16 16 0 01-16-16v-16a16 16 0 0116-16h192a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M368 280v16a16 16 0 01-16 16H160a16 16 0 01-16-16v-16a16 16 0 0116-16h192a16 16 0 0116 16z"
        className="folder-minus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFolderMinus;
