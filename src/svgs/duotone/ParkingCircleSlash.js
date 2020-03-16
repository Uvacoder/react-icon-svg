import * as React from "react";

function SvgParkingCircleSlash(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M168 352V234.61L257.78 304H232v48a16 16 0 01-16 16h-32a16 16 0 01-16-16zm192-128a80 80 0 00-80-80h-96a16 16 0 00-15 10.49L238.22 208H280a16 16 0 010 32h-.38l54.95 42.47A79.75 79.75 0 00360 224z"
        opacity={0.4}
      />
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 432c-101.46 0-184-82.54-184-184a182.66 182.66 0 0121.17-85.41l286.39 221.35A183.06 183.06 0 01248 440zm162.83-98.59L124.44 120.06A183.06 183.06 0 01248 72c101.46 0 184 82.54 184 184a182.66 182.66 0 01-21.17 85.41z"
        className="parking-circle-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgParkingCircleSlash;
