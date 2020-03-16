import * as React from "react";

function SvgLongArrowDown(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M124 351.93V56a24 24 0 0124-24h24a24 24 0 0124 24v295.93l-36 35.67z"
        opacity={0.4}
      />
      <path
        d="M313 337.46L177.48 473l-.06.06a25.23 25.23 0 01-34.84 0l-.06-.06L7 337.46a24 24 0 010-33.94l17-17a24 24 0 0133.94 0L160 387.6l102-101.08a24 24 0 0133.94 0l17 17a24 24 0 01.06 33.94z"
        className="long-arrow-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLongArrowDown;
