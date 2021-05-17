import * as React from "react";

function SvgEllipsisVAlt(props) {
  return (
    <svg viewBox="0 0 192 512" {...props}>
      <path
        d="M168 80a72 72 0 10-72 72 72 72 0 0072-72zm-96 0a24 24 0 1124 24 24 24 0 01-24-24zm96 352a72 72 0 10-72 72 72 72 0 0072-72zm-96 0a24 24 0 1124 24 24 24 0 01-24-24zm96-176a72 72 0 10-72 72 72 72 0 0072-72zm-96 0a24 24 0 1124 24 24 24 0 01-24-24z"
        opacity={0.4}
      />
      <path
        d="M120 80a24 24 0 10-24 24 24 24 0 0024-24zm0 176a24 24 0 10-24 24 24 24 0 0024-24zm0 176a24 24 0 10-24 24 24 24 0 0024-24z"
        className="ellipsis-v-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEllipsisVAlt;
