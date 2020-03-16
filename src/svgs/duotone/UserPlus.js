import * as React from "react";

function SvgUserPlus(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M640 224v32a16 16 0 01-16 16h-64v64a16 16 0 01-16 16h-32a16 16 0 01-16-16v-64h-64a16 16 0 01-16-16v-32a16 16 0 0116-16h64v-64a16 16 0 0116-16h32a16 16 0 0116 16v64h64a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M224 256A128 128 0 1096 128a128 128 0 00128 128zm89.6 32h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6A134.43 134.43 0 00313.6 288z"
        className="user-plus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserPlus;
