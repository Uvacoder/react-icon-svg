import * as React from "react";

function SvgSortSizeDown(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M428 320H276a20 20 0 00-20 20v120a20 20 0 0020 20h152a20 20 0 0020-20V340a20 20 0 00-20-20zm56-288H284a28 28 0 00-28 28v168a28 28 0 0028 28h200a28 28 0 0028-28V60a28 28 0 00-28-28z"
        opacity={0.4}
      />
      <path
        d="M176 352h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352z"
        className="sort-size-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSortSizeDown;
