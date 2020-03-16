import * as React from "react";

function SvgSignOut(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M180 448H96a96 96 0 01-96-96V160a96 96 0 0196-96h84a12 12 0 0112 12v40a12 12 0 01-12 12H96a32 32 0 00-32 32v192a32 32 0 0032 32h84a12 12 0 0112 12v40a12 12 0 01-12 12z"
        opacity={0.4}
      />
      <path
        d="M353 88.3l151.9 150.6a24 24 0 010 34.1l-152 150.8a24.08 24.08 0 01-33.9-.1l-21.9-21.9a24.07 24.07 0 01.8-34.7l77.6-71.1H184a23.94 23.94 0 01-24-24v-32a23.94 23.94 0 0124-24h191.5l-77.6-71.1a24 24 0 01-.7-34.6l21.9-21.9a24 24 0 0133.9-.1z"
        className="sign-out_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSignOut;
