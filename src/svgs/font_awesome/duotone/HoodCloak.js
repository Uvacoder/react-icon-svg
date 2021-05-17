import * as React from "react";

function SvgHoodCloak(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M576 480c-.19 16.52-13.46 32-32.33 32h-127.4V320a128 128 0 00-256 0v192H32.33C13.46 512 .19 496.52 0 480a31.1 31.1 0 016.36-19.16C64 383.87 64 320 64 320v-64C64 109.45 192 0 287.6 0h149.11C454.22 0 463 21.17 450.6 33.55L410.85 73.3C465.66 133 512 172 512 256v64s0 63.87 57.67 140.84A31.11 31.11 0 01576 480z"
        opacity={0.4}
      />
      <path
        d="M416.27 320v192h-256V320a128 128 0 01256 0z"
        className="hood-cloak_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHoodCloak;
