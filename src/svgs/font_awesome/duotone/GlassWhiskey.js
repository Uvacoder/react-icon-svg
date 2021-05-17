import * as React from "react";

function SvgGlassWhiskey(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M119.53 415.15L89.52 224h333.15l-29.81 191.22-.07.43v.31H119.73l-.06-.4z"
        opacity={0.4}
      />
      <path
        d="M442.63 96l-49.77 319.22-.07.43v.31H119.73l-.06-.4-.07-.44L69.42 96h373.21M480 32H32A32 32 0 00.32 68.51l56 356.58A64 64 0 00119.71 480h273a64.07 64.07 0 0063.4-54.91l55.57-356.58A32 32 0 00480 32z"
        className="glass-whiskey_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgGlassWhiskey;
