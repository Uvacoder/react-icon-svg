import * as React from "react";

function SvgCaretUp(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M160 168a19.41 19.41 0 0113.37 5.29c.27.26.54.53.8.8l128.92 134.26c12.63 13.15 3.68 35.65-14.17 35.65H160z"
        opacity={0.4}
      />
      <path
        d="M160 344H31.08c-17.85 0-26.8-22.48-14.17-35.63l128.92-134.28c.26-.27.53-.54.8-.8A19.41 19.41 0 01160 168z"
        className="caret-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretUp;
