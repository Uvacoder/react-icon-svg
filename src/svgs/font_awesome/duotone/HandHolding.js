import * as React from "react";

function SvgHandHolding(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M564 377L412.8 498a64.08 64.08 0 01-40 14H16a16 16 0 01-16-16v-96a16 16 0 0116-16h55.4l46.5-37.7A117.69 117.69 0 01192 320h160a32 32 0 0131.6 37.4c-2.6 15.7-17.4 26.6-33.3 26.6H272a16 16 0 000 32h118.3a63.67 63.67 0 0040-14l92.4-73.9c12.4-10 30.8-10.7 42.6 0A32 32 0 01564 377z"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgHandHolding;
