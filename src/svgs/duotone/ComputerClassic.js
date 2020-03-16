import * as React from "react";

function SvgComputerClassic(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M32 496a16 16 0 0016 16h352a16 16 0 0016-16v-48H32zM416 0H32A32 32 0 000 32v368a16 16 0 0016 16h416a16 16 0 0016-16V32a32 32 0 00-32-32zM80 356a20 20 0 1120-20 20 20 0 01-20 20zm304-12a8 8 0 01-8 8H232a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-120a32 32 0 01-32 32H96a32 32 0 01-32-32V96a32 32 0 0132-32h256a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M384 224a32 32 0 01-32 32H96a32 32 0 01-32-32V96a32 32 0 0132-32h256a32 32 0 0132 32z"
        className="computer-classic_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgComputerClassic;
