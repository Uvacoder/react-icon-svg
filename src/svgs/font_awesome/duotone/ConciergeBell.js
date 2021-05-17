import * as React from "react";

function SvgConciergeBell(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 400v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16zM208 112h16v18.29a224.73 224.73 0 0164 0V112h16a16 16 0 0016-16V80a16 16 0 00-16-16h-96a16 16 0 00-16 16v16a16 16 0 0016 16z"
        opacity={0.4}
      />
      <path
        d="M480 352H32c0-123.71 100.29-224 224-224s224 100.29 224 224z"
        className="concierge-bell_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgConciergeBell;
