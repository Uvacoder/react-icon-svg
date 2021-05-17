import * as React from "react";

function SvgGreaterThanEqual(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M24 400h400a24 24 0 0124 24v48a24 24 0 01-24 24H24a24 24 0 01-24-24v-48a24 24 0 0124-24z"
        opacity={0.4}
      />
      <path
        d="M55.34 243.83l175.44-68.05-175.56-68.09c-18.29-6-27.74-24.26-21.1-40.79L46.15 37C52.79 20.45 73 11.92 91.3 17.92L393 137.9c13.77 4.52 23 16.61 23 30.17v16c0 13.56-9.21 25.65-23 30.17L91.61 334.06c-18.39 6-38.7-2.54-45.38-19.15l-12.09-30.08c-6.68-16.61 2.86-34.97 21.2-41z"
        className="greater-than-equal_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGreaterThanEqual;
