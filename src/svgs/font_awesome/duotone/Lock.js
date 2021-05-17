import * as React from "react";

function SvgLock(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M152 224H72v-72C72 68.2 140.2 0 224 0s152 68.2 152 152v72h-80v-72a72 72 0 00-144 0z"
        opacity={0.4}
      />
      <path
        d="M448 272v192a48 48 0 01-48 48H48a48 48 0 01-48-48V272a48 48 0 0148-48h352a48 48 0 0148 48z"
        className="lock_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLock;
