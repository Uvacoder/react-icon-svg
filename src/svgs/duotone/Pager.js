import * as React from "react";

function SvgPager(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M448 224a32 32 0 01-32 32H96a32 32 0 01-32-32v-64a32 32 0 0132-32h320a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M448 64H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V128a64 64 0 00-64-64zM160 368H80a16 16 0 01-16-16v-16a16 16 0 0116-16h80zm128-16a16 16 0 01-16 16h-80v-48h80a16 16 0 0116 16zm160-128a32 32 0 01-32 32H96a32 32 0 01-32-32v-64a32 32 0 0132-32h320a32 32 0 0132 32z"
        className="pager_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPager;
