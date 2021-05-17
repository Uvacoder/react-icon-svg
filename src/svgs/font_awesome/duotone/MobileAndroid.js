import * as React from "react";

function SvgMobileAndroid(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M0 384v80a48 48 0 0048 48h224a48 48 0 0048-48v-80zm208 68a12 12 0 01-12 12h-72a12 12 0 01-12-12v-8a12 12 0 0112-12h72a12 12 0 0112 12z"
        opacity={0.4}
      />
      <path
        d="M0 384V48A48 48 0 0148 0h224a48 48 0 0148 48v336z"
        className="mobile-android_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMobileAndroid;
