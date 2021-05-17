import * as React from "react";

function SvgKey(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M303.06 348.91l.1.09-24 27a24 24 0 01-17.94 8H224v40a24 24 0 01-24 24h-40v40a24 24 0 01-24 24H24a24 24 0 01-24-24v-78a24 24 0 017-17l161.83-161.83-.11-.35a176.24 176.24 0 00134.34 118.09z"
        opacity={0.4}
      />
      <path
        d="M336 0a176 176 0 10176 176A176 176 0 00336 0zm48 176a48 48 0 1148-48 48 48 0 01-48 48z"
        className="key_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgKey;
