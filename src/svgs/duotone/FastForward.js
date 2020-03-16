import * as React from "react";

function SvgFastForward(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 76v360a12 12 0 01-12 12h-40a12 12 0 01-12-12V76a12 12 0 0112-12h40a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M416 313.31l-139.5 127.3c-20.6 17.2-52.5 2.8-52.5-24.6v-131.9L52.5 440.61C31.9 457.81 0 443.41 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.81V96c0-27.4 31.9-41.7 52.5-24.6L416 197.81z"
        className="fast-forward_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFastForward;
