import * as React from "react";

function SvgStocking(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M367.29 0h-288a16 16 0 00-16 16v64a16 16 0 0016 16h288a16 16 0 0016-16V16a16 16 0 00-16-16zM224 368a111.66 111.66 0 0035.42 81.72L280 436a159.58 159.58 0 0071.2-133.1V257a113.64 113.64 0 00-15.2-1 112 112 0 00-112 112z"
        opacity={0.4}
      />
      <path
        d="M259.42 449.72l-61.13 40.78a128 128 0 01-142-213l39-26V96h255.9v161a113.64 113.64 0 00-15.19-1 112 112 0 00-76.58 193.72z"
        className="stocking_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStocking;
