import * as React from "react";

function SvgGameBoardAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm-31.8 448h-384V64h384z"
        opacity={0.4}
      />
      <path
        d="M256 64v192h192V64zM64 448h192V256H64z"
        className="game-board-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGameBoardAlt;
