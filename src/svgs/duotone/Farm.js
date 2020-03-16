import * as React from "react";

function SvgFarm(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M190.24 120.94l-55.48 111a64.35 64.35 0 00-6.76 28.6V512H0V112a111.93 111.93 0 01221.87-21.09l-.37.17a64.12 64.12 0 00-31.26 29.86z"
        opacity={0.4}
      />
      <path
        d="M572.62 246.22l-55.49-111a32 32 0 00-15.62-14.93L381 66.76a32 32 0 00-26 0l-120.51 53.56a32 32 0 00-15.62 14.93l-55.49 111a32.08 32.08 0 00-3.38 14.29V512h128v-96h160v96h128V260.54a32.08 32.08 0 00-3.38-14.32zM416 320h-96v-96h96z"
        className="farm_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFarm;
