import * as React from "react";

function SvgMagnet(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M476.1 20h-104a36 36 0 00-36 36v80a12 12 0 0012 12h152a11.89 11.89 0 0012-11.9V56a36 36 0 00-36-36zm-336.1.1H36a36 36 0 00-36 36v80a12 12 0 0012 12h152.1a11.89 11.89 0 0011.9-12v-80a36 36 0 00-36-36z"
        opacity={0.4}
      />
      <path
        d="M512 192.2c-.2 20.2-.6 40.4 0 53.2 0 150.7-134.5 246.7-255.1 246.7S.1 396.1.1 245.5c.6-13 .1-31.9 0-53.3a12 12 0 0112-12.1h152a12 12 0 0112 12v52c0 127.9 160 128.1 160 0v-52a12 12 0 0112-12H500a12 12 0 0112 12.1z"
        className="magnet_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMagnet;
