import * as React from "react";

function SvgBookHeart(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
        opacity={0.4}
      />
      <path
        d="M96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm53.8-274.9c24-20 59.7-16.4 81.6 5.8l8.6 8.7 8.6-8.7c22-22.2 57.7-25.8 81.6-5.8a60.65 60.65 0 014.3 89.1l-84.7 85.6a13.94 13.94 0 01-19.8 0l-84.7-85.6a60.74 60.74 0 014.5-89.1z"
        className="book-heart_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBookHeart;
