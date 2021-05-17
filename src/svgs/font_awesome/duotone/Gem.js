import * as React from "react";

function SvgGem(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M100.7 192H0l218.7 255a3 3 0 005-3.3zm374.6 0l-123 251.7a3 3 0 005 3.2L576 192zm-327.1 0l137.1 318.2a3 3 0 005.5 0l137-318.2z"
        opacity={0.4}
      />
      <path
        d="M90.5 0L0 160h101.1L170.3 0zm395 0h-79.8l69.2 160H576zm-267 0l-69.2 160h277.4L357.5 0z"
        className="gem_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGem;
