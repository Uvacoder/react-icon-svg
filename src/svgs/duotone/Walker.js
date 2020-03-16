import * as React from "react";

function SvgWalker(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path d="M448 448a64 64 0 11-64-64 64 64 0 0164 64z" opacity={0.4} />
      <path
        d="M352 357.47a96.34 96.34 0 0164 0V96a96 96 0 00-96-96H190.66A95.62 95.62 0 0096 80L.24 487.77a16 16 0 0013 18.51l31.54 5.48a16 16 0 0018.5-13L127.81 224H352zM142.83 160l16.26-69.25A31.91 31.91 0 01190.66 64H320a32 32 0 0132 32v64z"
        className="walker_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgWalker;
