import * as React from "react";

function SvgPills(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M299.7 226.3a8.21 8.21 0 00-12.3.8c-45.3 62.5-40.4 150.1 15.9 206.4s143.9 61.2 206.4 15.9a8.14 8.14 0 00.8-12.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9a8.14 8.14 0 00-.8 12.3l210.8 210.8a8.21 8.21 0 0012.3-.8c45.3-62.6 40.5-150.1-15.9-206.4zM112 32A111.94 111.94 0 000 144v112h224V144A111.94 111.94 0 00112 32z"
        opacity={0.4}
      />
      <path
        d="M224 256v112a112 112 0 01-224 0V256z"
        className="pills_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPills;
