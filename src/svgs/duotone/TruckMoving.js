import * as React from "react";

function SvgTruckMoving(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M224 352a64 64 0 1064 64 64 64 0 00-64-64zm-160 0a64 64 0 1064 64 64 64 0 00-64-64zm464 0a64 64 0 1064 64 64 64 0 00-64-64z"
        opacity={0.4}
      />
      <path
        d="M621.3 237.3l-58.5-58.5a64 64 0 00-45.3-18.7H480V64a32 32 0 00-32-32H32A32 32 0 000 64v280.51A95.88 95.88 0 01144 363a96 96 0 01170.51 21h123a96 96 0 01181 0H624a16 16 0 0016-16v-85.5a63.79 63.79 0 00-18.7-45.2zM480 256v-48h37.5a15.88 15.88 0 0111.3 4.7l43.3 43.3z"
        className="truck-moving_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTruckMoving;
