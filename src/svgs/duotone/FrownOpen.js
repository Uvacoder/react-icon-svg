import * as React from "react";

function SvgFrownOpen(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208a32 32 0 1132 32 32 32 0 01-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3a16 16 0 01-20.5-18.1c7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2a16 16 0 01-20.5 18.1zM328 240a32 32 0 1132-32 32 32 0 01-32 32z"
        opacity={0.4}
      />
      <path
        d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32z"
        className="frown-open_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFrownOpen;
