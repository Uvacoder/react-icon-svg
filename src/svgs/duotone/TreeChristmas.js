import * as React from "react";

function SvgTreeChristmas(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M197.33 106.7L144 80l53.3-26.7L224 0l26.7 53.3L304 80l-53.3 26.7L224 160z"
        opacity={0.4}
      />
      <path
        d="M439.63 455.6L349.83 352h36c25.6 0 39.5-26.3 23.2-43.5L262.83 154 224 208l-38.8-54L39 308.5C22.7 325.7 36.6 352 62.2 352h36L8.43 455.6c-19 21.9-3.8 56.4 24.7 56.4h381.7c28.6 0 43.7-34.6 24.8-56.4zM160 312a24 24 0 1124-24 23.94 23.94 0 01-24 24zm128 128a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
        className="tree-christmas_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTreeChristmas;
