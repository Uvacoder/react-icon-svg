import * as React from "react";

function SvgUserMinus(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 224v32a16 16 0 01-16 16H432a16 16 0 01-16-16v-32a16 16 0 0116-16h192a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M313.6 288h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6A134.43 134.43 0 00313.6 288zM224 256A128 128 0 1096 128a128 128 0 00128 128z"
        className="user-minus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserMinus;
