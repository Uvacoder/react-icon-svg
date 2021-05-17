import * as React from "react";

function SvgToothbrush(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M320 232a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32zm64 0a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32zm64 0a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32zm-192 0a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32zm368 216H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16zM64 232a8 8 0 00-8-8H40a8 8 0 00-8 8v184h32zm128 0a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32zm-64 0a8 8 0 00-8-8h-16a8 8 0 00-8 8v184h32z"
        opacity={0.4}
      />
      <path
        d="M0 128a64 64 0 0164-64h261.49c33.4 0 50.13-40.38 26.51-64a128 128 0 01128 128 64 64 0 01-64 64H64a64 64 0 01-64-64z"
        className="toothbrush_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgToothbrush;
