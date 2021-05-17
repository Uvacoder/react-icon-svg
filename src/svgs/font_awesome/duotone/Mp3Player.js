import * as React from "react";

function SvgMp3Player(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zM192 448a96 96 0 1196-96 96 96 0 01-96 96zm128-256H64V64h256z"
        opacity={0.4}
      />
      <path
        d="M64 64v128h256V64zm128 192a96 96 0 1096 96 96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z"
        className="mp3-player_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMp3Player;
