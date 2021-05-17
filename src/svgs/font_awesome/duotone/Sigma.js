import * as React from "react";

function SvgSigma(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M360 352h-48a24 24 0 00-24 23.44V480h64a32 32 0 0032-32v-72a24 24 0 00-24-24zm-8-320h-64v104.56A24 24 0 00312 160h48a24 24 0 0024-24V64a32 32 0 00-32-32z"
        opacity={0.4}
      />
      <path
        d="M288 136v-8H142.24l109.09 128-109.09 128H288v-8.56V480H52a52 52 0 01-42-82.64L132.65 256 10 114.6A52 52 0 0152 32h236v104z"
        className="sigma_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSigma;
