import * as React from "react";

function SvgMusic(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M192 214.32V83.72l256-75.6V139.3z" opacity={0.4} />
      <path
        d="M128 126.51v261.41A139 139 0 0096 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V83.72L150.41 96A32 32 0 00128 126.51zm342.38-125L448 8.12v315.81a138.4 138.4 0 00-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 00-41.62-30.49z"
        className="music_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMusic;
