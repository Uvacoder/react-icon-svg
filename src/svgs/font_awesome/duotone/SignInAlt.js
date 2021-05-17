import * as React from "react";

function SvgSignInAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 160v192a96 96 0 01-96 96h-84a12 12 0 01-12-12v-40a12 12 0 0112-12h84a32 32 0 0032-32V160a32 32 0 00-32-32h-84a12 12 0 01-12-12V76a12 12 0 0112-12h84a96 96 0 0196 96z"
        opacity={0.4}
      />
      <path
        d="M369 273L201 441c-15 15-41 4.5-41-17v-96H24a23.94 23.94 0 01-24-24v-96a23.94 23.94 0 0124-24h136V88c0-21.5 26-32 41-17l168 168a24.2 24.2 0 010 34z"
        className="sign-in-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignInAlt;
