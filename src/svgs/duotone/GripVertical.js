import * as React from "react";

function SvgGripVertical(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M288 352h-64a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32v-64a32 32 0 00-32-32zm0-320h-64a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32V64a32 32 0 00-32-32zm0 160h-64a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32v-64a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M96 352H32a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32v-64a32 32 0 00-32-32zm0-160H32a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32v-64a32 32 0 00-32-32zm0-160H32A32 32 0 000 64v64a32 32 0 0032 32h64a32 32 0 0032-32V64a32 32 0 00-32-32z"
        className="grip-vertical_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGripVertical;
