import * as React from "react";

function SvgIcicles(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M511.36 37.9l-87.5 467.7c-1.7 8.6-14 8.6-15.7 0l-66.7-363.8-45.8 172.5a8 8 0 01-15.3 0l-34.1-133.4-46.5 196.9c-1.9 8.3-13.7 8.3-15.6 0L140 190.5l-36.4 124.1c-2.4 7.2-12.6 7.2-15.1 0L1.36 41.2A32 32 0 0132 0h448a32 32 0 0131.95 32.05 32.83 32.83 0 01-.55 5.85z"
        opacity={0.4}
      />
      <path
        d="M480 0H353.41a32 32 0 00-31.47 37.8l86.22 467.8c1.7 8.6 14 8.6 15.7 0l87.5-467.7a32.83 32.83 0 00.55-5.85A32 32 0 00480 0z"
        className="icicles_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgIcicles;
