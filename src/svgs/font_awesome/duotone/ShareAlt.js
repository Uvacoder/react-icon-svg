import * as React from "react";

function SvgShareAlt(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M155.79 180.9l102.49-64.06a95.93 95.93 0 0033.93 54.26l-102.49 64.06a95.93 95.93 0 00-33.93-54.26zm136.42 160l-102.49-64.06a95.93 95.93 0 01-33.93 54.26l102.49 64.06a95.93 95.93 0 0133.93-54.26z"
        opacity={0.4}
      />
      <path
        d="M96 160a96 96 0 1096 96 96 96 0 00-96-96zm256 32a96 96 0 10-96-96 96 96 0 0096 96zm0 128a96 96 0 1096 96 96 96 0 00-96-96z"
        className="share-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShareAlt;
