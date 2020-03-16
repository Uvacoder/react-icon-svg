import * as React from "react";

function SvgCaretLeft(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path
        d="M184 256v128.91c0 17.85-22.48 26.8-35.63 14.17L14.1 270.16l-.8-.8A19.41 19.41 0 018 256z"
        opacity={0.4}
      />
      <path
        d="M8 256a19.39 19.39 0 015.29-13.36c.26-.28.53-.55.8-.81L148.36 112.9c13.15-12.63 35.63-3.68 35.63 14.17V256z"
        className="caret-left_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretLeft;
