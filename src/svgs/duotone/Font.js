import * as React from "react";

function SvgFont(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M432 416H304a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zm-288 0H16a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        opacity={0.4}
      />
      <path
        d="M147.72 352h152.56l23.31 64h85L277.87 53.69C273.81 41.72 260.22 32 247.59 32h-47.18c-12.63 0-26.22 9.72-30.29 21.69L39.41 416h85zM224 142.52L271.16 272h-94.32z"
        className="font_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFont;
