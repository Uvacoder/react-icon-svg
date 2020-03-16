import * as React from "react";

function SvgSortSizeUp(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M484 32H284a28 28 0 00-28 28v168a28 28 0 0028 28h200a28 28 0 0028-28V60a28 28 0 00-28-28zm-56 288H276a20 20 0 00-20 20v120a20 20 0 0020 20h152a20 20 0 0020-20V340a20 20 0 00-20-20z"
        opacity={0.4}
      />
      <path
        d="M107.31 36.69a16 16 0 00-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.21 0 21.38-17.24 11.31-27.31z"
        className="sort-size-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSortSizeUp;
