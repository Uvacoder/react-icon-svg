import * as React from "react";

function SvgBetamax(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M0 160v240a48 48 0 0048 48h416a48 48 0 0048-48V160zm144 224a80 80 0 1180-80 80 80 0 01-80 80zm304 0H288V224h160z"
        opacity={0.4}
      />
      <path
        d="M496 64H16A16 16 0 000 80v80h512V80a16 16 0 00-16-16zM144 224a80 80 0 1080 80 80 80 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z"
        className="betamax_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBetamax;
