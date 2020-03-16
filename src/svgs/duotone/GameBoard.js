import * as React from "react";

function SvgGameBoard(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm-31.8 448H64v-96h.2v-96H64v-96h.2V64h384z"
        opacity={0.4}
      />
      <path
        d="M256 256v-96h-95.9V64.1h-96v96H160V256H64.2v96h96v-96zm0 96h-95.8v96h96v-96H352v-96h-96zm96.1 96.1h96v-96h-96zm.1-288.1v96h96v-96zm-96-96v96h96V64z"
        className="game-board_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGameBoard;
