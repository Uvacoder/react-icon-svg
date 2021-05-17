import * as React from "react";

function SvgBlender(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M328 288a8 8 0 01-8-8v-16a8 8 0 018-8h114.18l17.46-64H328a8 8 0 01-8-8v-16a8 8 0 018-8h140.36l17.46-64H328a8 8 0 01-8-8V72a8 8 0 018-8h166.55L512 0H48A48 48 0 000 48v160a48 48 0 0048 48h103.27l8.73 96h256l17.45-64zM64 192V64h69.82l11.64 128z"
        opacity={0.4}
      />
      <path
        d="M416 384H160a64 64 0 00-64 64v32a32 32 0 0032 32h320a32 32 0 0032-32v-32a64 64 0 00-64-64zm-128 96a32 32 0 1132-32 32 32 0 01-32 32zm40-288h131.64l8.72-32H328a8 8 0 00-8 8v16a8 8 0 008 8zm0 96h105.46l8.72-32H328a8 8 0 00-8 8v16a8 8 0 008 8zm0-224a8 8 0 00-8 8v16a8 8 0 008 8h157.81l8.73-32z"
        className="blender_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBlender;
