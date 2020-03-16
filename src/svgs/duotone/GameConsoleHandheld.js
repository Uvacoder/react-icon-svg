import * as React from "react";

function SvgGameConsoleHandheld(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M352 0H32A32 32 0 000 32v448a32 32 0 0032 32h256a96 96 0 0096-96V32a32 32 0 00-32-32zM160 344a8 8 0 01-8 8h-24v24a8 8 0 01-8 8h-16a8 8 0 01-8-8v-24H72a8 8 0 01-8-8v-16a8 8 0 018-8h24v-24a8 8 0 018-8h16a8 8 0 018 8v24h24a8 8 0 018 8zm72 40a24 24 0 1124-24 24 24 0 01-24 24zM112 224a16 16 0 01-16-16V80a16 16 0 0116-16h160a16 16 0 0116 16v112a32 32 0 01-32 32zm184 112a24 24 0 1124-24 24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M112 224a16 16 0 01-16-16V80a16 16 0 0116-16h160a16 16 0 0116 16v112a32 32 0 01-32 32z"
        className="game-console-handheld_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGameConsoleHandheld;
