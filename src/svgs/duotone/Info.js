import * as React from "react";

function SvgInfo(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path
        d="M20 448h152a20 20 0 0120 20v24a20 20 0 01-20 20H20a20 20 0 01-20-20v-24a20 20 0 0120-20z"
        opacity={0.4}
      />
      <path
        d="M96 128a64 64 0 10-64-64 64 64 0 0064 64zm28 64H20a20 20 0 00-20 20v24a20 20 0 0020 20h28v192h96V212a20 20 0 00-20-20z"
        className="info_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgInfo;
