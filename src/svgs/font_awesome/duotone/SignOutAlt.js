import * as React from "react";

function SvgSignOutAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M64 160v192a32 32 0 0032 32h84a12 12 0 0112 12v40a12 12 0 01-12 12H96a96 96 0 01-96-96V160a96 96 0 0196-96h84a12 12 0 0112 12v40a12 12 0 01-12 12H96a32 32 0 00-32 32z"
        opacity={0.4}
      />
      <path
        d="M288 424v-96H152a23.94 23.94 0 01-24-24v-96a23.94 23.94 0 0124-24h136V88c0-21.4 25.9-32 41-17l168 168a24.2 24.2 0 010 34L329 441c-15 15-41 4.52-41-17z"
        className="sign-out-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignOutAlt;
