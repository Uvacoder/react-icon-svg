import * as React from "react";

function SvgShield(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M256 224v288a48.12 48.12 0 0018.41-3.68c72.34-30.14 180.16-123 212.09-284.29zM237.59 3.67l-192 80A47.92 47.92 0 0016 128a485.36 485.36 0 009.63 96H256V0a57.58 57.58 0 00-18.41 3.67z"
        opacity={0.4}
      />
      <path
        d="M237.5 508.32A48 48 0 00256 512V224H25.63C55.11 370.52 148.77 471.34 237.5 508.32zm229-424.64l-192-80A57.34 57.34 0 00256.06 0H256v224h230.5a491.56 491.56 0 009.5-96 48 48 0 00-29.5-44.32z"
        className="shield_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShield;
