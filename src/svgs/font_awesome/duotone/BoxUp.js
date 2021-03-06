import * as React from "react";

function SvgBoxUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zM57.8 179l64-80a8.28 8.28 0 0112.5 0l64 80a8 8 0 01-6.2 13h-32v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V192H64a8 8 0 01-6.2-13zM384 408a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h304a8 8 0 018 8zm0-216h-32v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V192h-32a8 8 0 01-6.2-13l64-80a8.28 8.28 0 0112.5 0l64 80a8.05 8.05 0 01-6.3 13z"
        opacity={0.4}
      />
      <path
        d="M134.3 99a8.28 8.28 0 00-12.5 0l-64 80a8 8 0 006.2 13h32.1v112a16 16 0 0016 16h32a16 16 0 0016-16V192h32a8 8 0 006.2-13zm256 80l-64-80a8.28 8.28 0 00-12.5 0l-64 80a8 8 0 006.2 13h32v112a16 16 0 0016 16h32a16 16 0 0016-16V192h32a8.05 8.05 0 006.3-13z"
        className="box-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBoxUp;
