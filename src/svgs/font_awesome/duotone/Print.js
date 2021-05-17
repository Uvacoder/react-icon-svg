import * as React from "react";

function SvgPrint(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64 480a32 32 0 0032 32h320a32 32 0 0032-32v-96H64zM368 96a16 16 0 01-16-16V0H96a32 32 0 00-32 32v192h384V96z"
        opacity={0.4}
      />
      <path
        d="M368 96h80v-4.58a17.92 17.92 0 00-5.25-12.67l-73.43-73.5A18 18 0 00356.57 0H352v80a16 16 0 0016 16zm80 96v32H64v-32a64 64 0 00-64 64v112a16 16 0 0016 16h480a16 16 0 0016-16V256a64 64 0 00-64-64zm-16 136a24 24 0 1124-24 24 24 0 01-24 24z"
        className="print_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPrint;
