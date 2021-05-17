import * as React from "react";

function SvgJug(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M144 64h160a16 16 0 0016-16V16a16 16 0 00-16-16H144a16 16 0 00-16 16v32a16 16 0 0016 16zM32 288v128h384V288z"
        opacity={0.4}
      />
      <path
        d="M448 168a71.72 71.72 0 00-126.68-46.35L311 108.77a32 32 0 01-7-20V64H144v24.78a32 32 0 01-7 20l-76.95 96.16a128 128 0 00-28 80V288H416v-3.1a127.59 127.59 0 00-11.1-51A72 72 0 00448 168zm-70.62 23.72l-24.09-30.1C356.14 151.54 365 144 376 144a23.88 23.88 0 011.38 47.72zM32 448a64 64 0 0064 64h256a64 64 0 0064-64v-32H32z"
        className="jug_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgJug;
