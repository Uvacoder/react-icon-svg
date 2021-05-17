import * as React from "react";

function SvgLevelDown(props) {
  return (
    <svg viewBox="0 0 352 512" {...props}>
      <path
        d="M59.51 76.48l-56-56A12 12 0 0112 0h196a24 24 0 0124 24v348.71l-40 43.21-40-43.23V80H68a12 12 0 01-8.49-3.52z"
        opacity={0.4}
      />
      <path
        d="M345 367.28L209.09 504.87l-.09.13a24.08 24.08 0 01-33.95 0l-.14-.14L39 367.28a24.22 24.22 0 010-34l22-22.17a23.91 23.91 0 0133.81-.11l.13.13c.21.21.42.43.62.65L192 415.92l96.45-104.21c.2-.22.41-.44.62-.65a23.92 23.92 0 0133.82-.13l.12.13 22 22.17a24.22 24.22 0 010 34z"
        className="level-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLevelDown;
