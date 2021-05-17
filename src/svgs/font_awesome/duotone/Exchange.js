import * as React from "react";

function SvgExchange(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M488 384H106l30.47 27.73a24 24 0 01.47 34.4L126.13 457a24 24 0 01-33.94 0L9.37 374.63a32 32 0 010-45.26L92.19 247a24 24 0 0133.94 0L137 257.87a24 24 0 01-.47 34.4L106 320h382a24 24 0 0124 24v16a24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M0 168v-16a24 24 0 0124-24h382l-30.5-27.73a24 24 0 01-.47-34.4L385.87 55a24 24 0 0133.94 0l82.82 82.34a32 32 0 010 45.26L419.81 265a24 24 0 01-33.94 0L375 254.13a24 24 0 01.47-34.4L406 192H24a24 24 0 01-24-24z"
        className="exchange_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgExchange;
