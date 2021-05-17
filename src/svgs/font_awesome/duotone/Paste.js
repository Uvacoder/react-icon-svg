import * as React from "react";

function SvgPaste(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M320 264V160H184a24 24 0 00-24 24v304a24 24 0 0024 24h240a24 24 0 0024-24V288H344a24.07 24.07 0 01-24-24zm121-31l-66-66a24 24 0 00-17-7h-6v96h96v-6.06a24 24 0 00-7-16.94z"
        opacity={0.4}
      />
      <path
        d="M296 32h-80.61a63.94 63.94 0 00-110.78 0H24A24 24 0 000 56v336a24 24 0 0024 24h104V184a56.06 56.06 0 0156-56h136V56a24 24 0 00-24-24zM160 88a24 24 0 1124-24 24 24 0 01-24 24z"
        className="paste_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPaste;
