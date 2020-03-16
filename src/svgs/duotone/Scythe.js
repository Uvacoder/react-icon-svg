import * as React from "react";

function SvgScythe(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path d="M549.87 0L510 192H0C64 64 192 0 338.87 0z" opacity={0.4} />
      <path
        d="M639.44 38l-96.27 461a16 16 0 01-15.72 13H496a16 16 0 01-16-16 16.16 16.16 0 01.27-2.94l29.26-141H400a16 16 0 01-16-16V304a16 16 0 0116-16h122.81L582.55 0H608a32 32 0 0131.44 38z"
        className="scythe_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScythe;
