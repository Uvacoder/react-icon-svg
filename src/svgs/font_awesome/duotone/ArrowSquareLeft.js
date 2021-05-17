import * as React from "react";

function SvgArrowSquareLeft(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 232a23.94 23.94 0 01-24 24H177.4l75.5 72.4a24 24 0 01.4 34.3l-11 10.9a23.9 23.9 0 01-33.9 0L75.7 272.9a23.9 23.9 0 010-33.9l132.7-132.6a23.9 23.9 0 0133.9 0l11 10.9a24 24 0 01-.4 34.3L177.4 224H360a23.94 23.94 0 0124 24z"
        opacity={0.4}
      />
      <path
        d="M253.3 394.7l-11 10.9a23.9 23.9 0 01-33.9 0L75.7 272.9a23.9 23.9 0 010-33.9l132.7-132.6a23.9 23.9 0 0133.9 0l11 10.9a24 24 0 01-.4 34.3L177.4 224H360a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24H177.4l75.5 72.4a24 24 0 01.4 34.3z"
        className="arrow-square-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgArrowSquareLeft;
