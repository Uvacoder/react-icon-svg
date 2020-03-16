import * as React from "react";

function SvgUserCheck(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M636.6 159.6a12 12 0 01-.1 16.8L495.2 316.6a11.86 11.86 0 01-16.8-.1l-81.7-82.3a11.86 11.86 0 01.1-16.8l28.1-27.9a11.86 11.86 0 0116.8.1l45.5 45.8 104.8-104a11.86 11.86 0 0116.8.1z"
        opacity={0.4}
      />
      <path
        d="M224 256A128 128 0 1096 128a128 128 0 00128 128zm89.6 32h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6A134.43 134.43 0 00313.6 288z"
        className="user-check_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserCheck;
