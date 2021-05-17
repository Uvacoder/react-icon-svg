import * as React from "react";

function SvgTrain(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M376 96H72a24 24 0 00-24 24v112a24 24 0 0024 24h304a24 24 0 0024-24V120a24 24 0 00-24-24zm5 401.72L318 448H130l-63 49.72A8 8 0 0072 512h304a8 8 0 005-14.28z"
        opacity={0.4}
      />
      <path
        d="M130 448h188c68.4 0 130-44.19 130-96V96c0-53-63-96-128-96H128C64 0 0 43 0 96v256c0 52 61.82 96 130 96zm94-40a56 56 0 1156-56 56 56 0 01-56 56zM48 120a24 24 0 0124-24h304a24 24 0 0124 24v112a24 24 0 01-24 24H72a24 24 0 01-24-24z"
        className="train_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTrain;
