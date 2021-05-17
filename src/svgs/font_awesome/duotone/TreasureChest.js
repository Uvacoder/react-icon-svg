import * as React from "react";

function SvgTreasureChest(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M0 128v128h96V32a96 96 0 00-96 96zm0 320a32 32 0 0032 32h64V288H0zm352-112a16 16 0 01-16 16h-96a16 16 0 01-16-16v-48h-64v192h256V288h-64zM480 32v224h96V128a96 96 0 00-96-96zm0 448h64a32 32 0 0032-32V288h-96zM160 256h64v-48a16 16 0 0116-16h96a16 16 0 0116 16v48h64V32H160z"
        opacity={0.4}
      />
      <path
        d="M96 256h64V32H96zm0 224h64V288H96zm320 0h64V288h-64zm0-448v224h64V32zm-80 160h-96a16 16 0 00-16 16v128a16 16 0 0016 16h96a16 16 0 0016-16V208a16 16 0 00-16-16zm-32 112a16 16 0 01-32 0v-64a16 16 0 0132 0z"
        className="treasure-chest_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTreasureChest;
