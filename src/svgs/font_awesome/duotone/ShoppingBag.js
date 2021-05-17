import * as React from "react";

function SvgShoppingBag(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 00-128-.08v32h64z"
        opacity={0.4}
      />
      <path
        d="M.06 159.87l-.16 272a80 80 0 0079.95 80.05l288 .16a80 80 0 0080-80l.16-272zM128 247.94a24 24 0 1124-24 24 24 0 01-24 24zm192 .12a24 24 0 1124-24 24 24 0 01-24 24z"
        className="shopping-bag_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShoppingBag;
