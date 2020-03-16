import * as React from "react";

function SvgPercent(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M336 288a112 112 0 10112 112 111.94 111.94 0 00-112-112zm0 160a48 48 0 1148-48 48 48 0 01-48 48zM112 0a112 112 0 10112 112A111.94 111.94 0 00112 0zm0 160a48 48 0 1148-48 48 48 0 01-48 48z"
        opacity={0.4}
      />
      <path
        d="M4.7 474.1l368-463.7A24 24 0 01392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a24 24 0 01-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8z"
        className="percent_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPercent;
