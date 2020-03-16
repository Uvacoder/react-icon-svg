import * as React from "react";

function SvgCaretDown(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M160 168h128.92c17.85 0 26.8 22.48 14.17 35.63L174.17 337.89c-.26.28-.53.54-.8.8A19.41 19.41 0 01160 344z"
        opacity={0.4}
      />
      <path
        d="M160 344a19.41 19.41 0 01-13.37-5.29c-.27-.26-.54-.52-.8-.8L16.91 203.63C4.28 190.48 13.23 168 31.08 168H160z"
        className="caret-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretDown;
