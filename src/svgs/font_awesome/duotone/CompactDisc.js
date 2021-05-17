import * as React from "react";

function SvgCompactDisc(props) {
  return (
    <svg viewBox="0 0 496 512" {...props}>
      <path
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96a96 96 0 1196-96 96 96 0 01-96 96z"
        opacity={0.4}
      />
      <path
        d="M248 160a96 96 0 1096 96 96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z"
        className="compact-disc_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCompactDisc;
