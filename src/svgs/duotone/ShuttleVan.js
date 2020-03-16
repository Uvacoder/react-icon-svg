import * as React from "react";

function SvgShuttleVan(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M160 320a80 80 0 1080 80 80 80 0 00-80-80zm320 0a80 80 0 1080 80 80 80 0 00-80-80z"
        opacity={0.4}
      />
      <path
        d="M628.88 210.65L494.39 49.27A48 48 0 00457.52 32H32A32 32 0 000 64v288a32 32 0 0032 32h17.14a112 112 0 01221.72 0h98.28a112 112 0 01221.72 0H608a32 32 0 0032-32V241.38a48.05 48.05 0 00-11.12-30.73zM160 192H64V96h96zm160 0h-96V96h96zm64 0V96h66l80 96z"
        className="shuttle-van_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShuttleVan;
