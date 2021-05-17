import * as React from "react";

function SvgChild(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M120 72a72 72 0 1172 72 72 72 0 01-72-72z" opacity={0.4} />
      <path
        d="M9.37 118.63a32 32 0 0145.26-45.26L141.25 160h101.5l86.62-86.63a32 32 0 0145.26 45.26L280 213.25V480a32 32 0 01-32 32h-16a32 32 0 01-32-32V368h-16v112a32 32 0 01-32 32h-16a32 32 0 01-32-32V213.25z"
        className="child_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChild;
