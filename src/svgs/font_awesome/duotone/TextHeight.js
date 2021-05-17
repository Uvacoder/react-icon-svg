import * as React from "react";

function SvgTextHeight(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M320 48v96a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32h-56v304h40a16 16 0 0116 16v32a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h40V112H64v32a16 16 0 01-16 16H16a16 16 0 01-16-16V48a16 16 0 0116-16h288a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M571.31 395.31l-80 80a16 16 0 01-22.62 0l-80-80c-10-10-3-27.31 11.31-27.31h48V144h-48c-15.64 0-20.64-18-11.31-27.31l80-80a16 16 0 0122.62 0l80 80c10 10 3 27.31-11.31 27.31h-48v224h48c15.64 0 20.64 18 11.31 27.31z"
        className="text-height_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTextHeight;
