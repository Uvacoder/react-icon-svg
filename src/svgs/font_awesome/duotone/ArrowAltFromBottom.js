import * as React from "react";

function SvgArrowAltFromBottom(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M360 480H24a24 24 0 01-24-24v-16a24 24 0 0124-24h336a24 24 0 0124 24v16a24 24 0 01-24 24z"
        opacity={0.4}
      />
      <path
        d="M232 384h-80a23.94 23.94 0 01-24-24V224H40.3c-17.8 0-26.8-21.51-14.2-34.11L178.4 37.63a19.36 19.36 0 0127.3 0l152.1 152.23c12.6 12.6 3.7 34.11-14.1 34.11H256V360a23.94 23.94 0 01-24 24z"
        className="arrow-alt-from-bottom_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowAltFromBottom;
