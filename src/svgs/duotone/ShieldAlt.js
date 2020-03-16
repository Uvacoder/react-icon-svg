import * as React from "react";

function SvgShieldAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M496 128c0 221.29-135.9 344.6-221.6 380.32A48.29 48.29 0 01256 512V0a48.18 48.18 0 0118.5 3.67l192 80A48 48 0 01496 128z"
        opacity={0.4}
      />
      <path
        d="M256 0v512a48.18 48.18 0 01-18.5-3.67C130.5 463.72 16 326.52 16 128a48 48 0 0129.6-44.32l192-80A48.29 48.29 0 01256 0z"
        className="shield-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShieldAlt;
