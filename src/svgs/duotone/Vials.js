import * as React from "react";

function SvgVials(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M128 304a48 48 0 0096 0V160h-96zm288-144v144a48 48 0 0096 0V160z"
        opacity={0.4}
      />
      <path
        d="M360 64h24v240a80 80 0 00160 0V64h24a8 8 0 008-8V8a8 8 0 00-8-8H360a8 8 0 00-8 8v48a8 8 0 008 8zm72 0h64v240a32 32 0 01-64 0zm192 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16zM72 64h24v240a80 80 0 00160 0V64h24a8 8 0 008-8V8a8 8 0 00-8-8H72a8 8 0 00-8 8v48a8 8 0 008 8zm72 0h64v240a32 32 0 01-64 0z"
        className="vials_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgVials;
