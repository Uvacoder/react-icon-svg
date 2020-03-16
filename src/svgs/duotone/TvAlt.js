import * as React from "react";

function SvgTvAlt(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M520 448H120a24 24 0 00-24 24v16a24 24 0 0024 24h400a24 24 0 0024-24v-16a24 24 0 00-24-24zM592 0H48A48 48 0 000 48v320a48 48 0 0048 48h544a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h512z"
        opacity={0.4}
      />
      <path d="M576 352H64V64h512z" className="tv-alt_svg__fa-primary" />
    </svg>
  );
}

export default SvgTvAlt;
