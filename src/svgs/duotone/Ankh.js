import * as React from "react";

function SvgAnkh(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M296 256H24a24 24 0 00-24 24v32a24 24 0 0024 24h272a24 24 0 0024-24v-32a24 24 0 00-24-24z"
        opacity={0.4}
      />
      <path
        d="M120 488a24 24 0 0024 24h32a24 24 0 0024-24V336h-80zM160 0C89.31 0 32 55.63 32 144c0 37.65 15.54 78 36.62 112h182.76C272.46 222 288 181.65 288 144 288 55.63 230.69 0 160 0zm0 244.87c-20.86-22.72-48-66.21-48-100.87 0-39.48 18.39-64 48-64s48 24.52 48 64c0 34.66-27.14 78.14-48 100.87z"
        className="ankh_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgAnkh;
